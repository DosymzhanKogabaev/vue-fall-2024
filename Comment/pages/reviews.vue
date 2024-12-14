<template>
    <div class="flex">
        <Sidebar />
        <div class="px-8 bg-gray-100 w-full">
            <div class="max-w-3xl h-screen pt-20 w-full overflow-y-scroll no-scrollbar">
                <div class="text-3xl font-medium mb-4">My Reviews</div>
                <ul v-if="comments.length > 0 && !isEmpty">
                    <li v-for="(comment, index) in comments" :key="index">
                        <div class="border bg-white px-8 py-6 rounded-xl mb-4">
                            <div class="flex justify-between">
                                <div>
                                    <div class="font-bold">{{ comment.jobTitle }}</div>
                                    <span v-if="authors[comment.authorId]">
                                        <span v-if="authors[comment.authorId].user">
                                            {{ authors[comment.authorId].user.username }}
                                        </span>
                                        <span v-else>
                                            {{ authors[comment.authorId].company.companyName }}
                                        </span>
                                    </span>
                                    <span v-else>Loading...</span>
                                </div>
                                <div>
                                    <StarRating :rating="comment.rating" />
                                </div>
                            </div>
                            <div class="text-[#424242] bg-[#f5f5f5] border-0 rounded-lg px-3 py-2 text-sm inline-block mt-1"
                                :class="{ 'Previous': !comment.isCurrent }">
                                {{ user.companyName ? (comment.isCurrent ? 'Current place of work' : 'Previous place of work') : (comment.isCurrent ? 'Current employee' : 'Previous employee') }}
                            </div>
                            <div class="h-px bg-gray-200 mt-4"></div>
                            <div class="mt-4 font-bold">Description:</div>
                            <div class="break-words">{{ comment.description }}</div>
                            <div v-if="comment.recommend" class="flex gap-x-2 mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#3460A4">
                                    <path
                                        d="M21.3 10.08A3 3 0 0 0 19 9h-4.56L15 7.57A4.13 4.13 0 0 0 11.11 2a1 1 0 0 0-.91.59L7.35 9H5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12.73a3 3 0 0 0 2.95-2.46l1.27-7a3 3 0 0 0-.65-2.46M7 20H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2zm13-7.82-1.27 7a1 1 0 0 1-1 .82H9v-9.79l2.72-6.12a2.11 2.11 0 0 1 1.38 2.78l-.53 1.43a2 2 0 0 0 1.87 2.7H19a1 1 0 0 1 .77.36 1 1 0 0 1 .23.82" />
                                </svg>
                                <div class="text-[#3460A4] my-auto">
                                    {{ user.companyName ? 'Recommends your company' : 'Recommends you' }}
                                </div>
                            </div>
                            <div v-else class="flex gap-x-2 mt-4">
                                <svg class="rotate-180" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    fill="#3460A4">
                                    <path
                                        d="M21.3 10.08A3 3 0 0 0 19 9h-4.56L15 7.57A4.13 4.13 0 0 0 11.11 2a1 1 0 0 0-.91.59L7.35 9H5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12.73a3 3 0 0 0 2.95-2.46l1.27-7a3 3 0 0 0-.65-2.46M7 20H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2zm13-7.82-1.27 7a1 1 0 0 1-1 .82H9v-9.79l2.72-6.12a2.11 2.11 0 0 1 1.38 2.78l-.53 1.43a2 2 0 0 0 1.87 2.7H19a1 1 0 0 1 .77.36 1 1 0 0 1 .23.82" />
                                </svg>
                                <div class="text-[#3460A4] my-auto">
                                    {{ user.companyName ? "Doesn't Recommend your company" : "Doesn't Recommend you" }}
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div v-else-if="isEmpty" class="text-xl">You don't have any reviews</div>
                <div v-else class="text-xl">Loading...</div>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/sidebar.vue';
import StarRating from '../components/starRating.vue';
import { ref, onMounted } from 'vue';
import { getUserByID } from '../services/userService';
import { getCompanyByID } from '../services/companyService';

export default {
    components: {
        Sidebar,
        StarRating,
    },
    setup() {
        const user = ref({});
        const comments = ref([]);
        const authors = ref({});
        const isEmpty = ref(false);

        const getUser = async () => {
            let userJSON = localStorage.getItem('user');
            let userData = JSON.parse(userJSON);
            if (userData) {
                userData = await getUserByID(userData._id);
            } else {
                userData = JSON.parse(localStorage.getItem('company'));
                userData = await getCompanyByID(userData._id);
            }
            return userData;
        };

        const getUserOrCompanyByID = async (id) => {
            try {
                const res = await getUserByID(id);
                return { user: res };
            } catch (error) {
                const res = await getCompanyByID(id);
                return { company: res };
            }
        };

        const fetchUser = async () => {
            user.value = await getUser();
        };

        const fetchComments = () => {
            if (user.value && user.value.comments) {
                const commentsList = [...user.value.comments];
                isEmpty.value = commentsList.length === 0;
                comments.value = commentsList;
            }
        };

        const fetchAuthors = async () => {
            const newAuthors = {};
            for (const comment of comments.value) {
                const author = await getUserOrCompanyByID(comment.authorId);
                newAuthors[comment.authorId] = author;
            }
            authors.value = newAuthors;
        };

        onMounted(() => {
            fetchUser().then(() => {
                fetchComments();
                fetchAuthors();
            });
        });

        return {
            user,
            comments,
            authors,
            isEmpty,
        };
    },
};
</script>

<style scoped>
::-webkit-scrollbar {
    display: none;
}
</style>
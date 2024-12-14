<template>
    <div class="flex">
        <Sidebar />
        <div class="px-8 bg-gray-100 w-full">
            <div class="max-w-3xl h-screen pt-20 w-full overflow-y-scroll no-scrollbar">
                <div class="text-3xl font-medium mb-4">My Interviews</div>
                <ul v-if="interviews.length > 0 && !isEmpty">
                    <li v-for="(interview, index) in interviews" :key="index">
                        <div class="border bg-white px-8 py-6 rounded-xl mb-4">
                            <div class="flex justify-between">
                                <div>
                                    <div class="font-bold text-lg">{{ interview.jobTitle }}</div>
                                    <span v-if="authors[interview.userId]">
                                        <span>
                                            {{ authors[interview.userId].user.username }}
                                        </span>
                                    </span>
                                    <span v-else>Loading...</span>
                                </div>
                                <div class="flex">
                                    <div class="my-auto font-semibold text-lg">Difficulty: </div>
                                    <StarRating :rating="interview.difficulty" />
                                </div>
                            </div>
                            <div class="h-px bg-gray-200 mt-4"></div>
                            <div class="mt-4 font-bold">Description:</div>
                            <div class="break-words">{{ interview.description }}</div>
                        </div>
                    </li>
                </ul>
                <div v-else-if="isEmpty" class="text-xl">You don't have any interviews info</div>
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
        const interviews = ref([]);
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

        const fetchInterviews = () => {
            if (user.value && user.value.interviews) {
                const interviewsList = [...user.value.interviews];
                isEmpty.value = interviewsList.length === 0;
                interviews.value = interviewsList;
            }
        };

        const fetchAuthors = async () => {
            const newAuthors = {};
            for (const interview of interviews.value) {
                const author = await getUserOrCompanyByID(interview.userId);
                newAuthors[interview.userId] = author;
            }
            authors.value = newAuthors;
        };

        onMounted(() => {
            fetchUser().then(() => {
                fetchInterviews();
                fetchAuthors();
            });
        });

        return {
            user,
            interviews,
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
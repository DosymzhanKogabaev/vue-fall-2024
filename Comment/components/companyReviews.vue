<template>
    <div>
        <div class="text-3xl font-medium mb-10">
            Employee reviews about {{ company.companyName }}
        </div>
        <ul>
            <li v-for="(comment, index) in comments" :key="index">
                <div class="border bg-white px-8 py-6 rounded-xl mb-4">
                    <div class="flex justify-between">
                        <div>
                            <div class="font-bold text-lg">{{ comment.jobTitle }}</div>
                            <span v-if="authors[comment.authorId]">
                                <span v-if="authors[comment.authorId].user">{{ authors[comment.authorId].user.username
                                    }}</span>
                                <span v-else>{{ authors[comment.authorId].company.companyName }}</span>
                            </span>
                            <span v-else>Loading...</span>
                        </div>
                        <div>
                            <StarRating :rating="comment.rating" />
                        </div>
                    </div>
                    <div class="text-[#424242] bg-[#f5f5f5] border-0 rounded-lg px-3 py-2 text-sm inline-block mt-1">
                        {{ comment.isCurrent ? 'Current place of work' : 'Previous place of work' }}
                    </div>
                    <div class="h-px bg-gray-200 mt-4"></div>
                    <div class="mt-4 font-bold text-lg">Description:</div>
                    <div class="break-words">{{ comment.description }}</div>
                    <div class="flex gap-x-2 mt-4">
                        <svg v-if="comment.recommend" xmlns='http://www.w3.org/2000/svg' width='24' height='24'
                            fill='#3460A4'>
                            <path
                                d='M21.3 10.08A3 3 0 0 0 19 9h-4.56L15 7.57A4.13 4.13 0 0 0 11.11 2a1 1 0 0 0-.91.59L7.35 9H5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12.73a3 3 0 0 0 2.95-2.46l1.27-7a3 3 0 0 0-.65-2.46M7 20H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2zm13-7.82-1.27 7a1 1 0 0 1-1 .82H9v-9.79l2.72-6.12a2.11 2.11 0 0 1 1.38 2.78l-.53 1.43a2 2 0 0 0 1.87 2.7H19a1 1 0 0 1 .77.36 1 1 0 0 1 .23.82' />
                        </svg>
                        <div class="text-[#3460A4] my-auto">{{ comment.recommend ? 'Recommends This Company' : "Doesn't Recommend This Company" }}</div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import StarRating from '../components/StarRating.vue';
import { getUserByID } from "../services/userService";
import { getCompanyByID } from "../services/companyService";

export default {
    components: {
        StarRating
    },
    props: {
        company: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            comments: [],
            authors: {}
        };
    },
    async created() {
        await this.fetchComments();
        await this.fetchAuthors();
    },
    methods: {
        async fetchComments() {
            this.comments = await this.getCommentsList(this.company);
        },
        async fetchAuthors() {
            const newAuthors = {};
            for (const comment of this.comments) {
                const author = await this.getUserOrCompanyByID(comment.authorId);
                newAuthors[comment.authorId] = author;
            }
            this.authors = newAuthors;
            console.log(newAuthors)
        },
        async getCommentsList(company) {
            return company.comments || [];
        },
        async getUserOrCompanyByID(id) {
            try {
                const user = await getUserByID(id);
                return { user };
            } catch (error) {
                const company = await getCompanyByID(id);
                return { company };
            }
        }
    }
};
</script>
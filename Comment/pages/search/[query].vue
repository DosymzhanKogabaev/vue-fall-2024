<template>
    <div class="min-h-screen flex flex-col justify-between">
        <Header :companies="companies" />
        <div class="wrapper grow flex flex-col">
            <template v-if="isLoading">
                <div class="m-auto">
                    <div role="status" class="m-auto">
                        <svg aria-hidden="true"
                            class="inline w-32 h-32 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor" />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill" />
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </template>

            <div v-else-if="filteredCompanies.length > 0">
                <div class="font-medium text-4xl mt-6">
                    Search results: "{{ query }}" ({{ filteredCompanies.length }})
                </div>
                <div class="grid grid-cols-5 py-12 gap-x-4 gap-y-12">
                    <NuxtLink v-for="company in filteredCompanies" :key="company._id"
                        :to="`/company/${encodeURIComponent(company.companyName)}`">
                        <div class="border-0 rounded-2xl shadow px-4 py-4 h-full">
                            <div class="p-2 w-[84px] border rounded-xl shadow-lg mx-auto mt-[-48px]">
                                <img class="rounded-xl" :src="company.imgUrl ? company.imgUrl : noimage"
                                    alt="Company Logo" />
                            </div>
                            <div class="text-center mt-2 text-xl font-semibold">
                                {{ company.companyName }}
                            </div>
                            <div class="flex justify-center mt-2">
                                <div>{{ company.rating.toFixed(1) }}</div>
                                <StarRating :rating="company.rating" />
                            </div>
                            <div class="text-[#9e9e9e] text-center">
                                {{ company.comments.length }}
                                {{ company.comments.length === 1 ? "review" : "reviews" }}
                            </div>
                        </div>
                    </NuxtLink>
                </div>
            </div>
            <div v-else>
                <div class="font-medium text-4xl mt-6">
                    Company "{{ query }}" was not found
                </div>
                <div class="text-xl mt-4">
                    Try entering a different search query
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';
import StarRating from '../components/starRating.vue';
import noimage from '../assets/no-image.jpg';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getCompaniesList } from '../services/companyService.js';

export default {
    components: {
        Header,
        Footer,
        StarRating,
    },
    setup() {
        const companies = ref([]);
        const filteredCompanies = ref([]);
        const isLoading = ref(true);
        const route = useRoute();
        const query = route.params.query;

        const fetchCompanies = async () => {
            const response = await getCompaniesList();
            const sortedCompanies = response.sort((a, b) => b.rating - a.rating);
            companies.value = sortedCompanies;
        };

        const filterCompanies = () => {
            if (companies.value.length > 0) {
                filteredCompanies.value = companies.value.filter((company) =>
                    company.companyName.toLowerCase().includes(query.toLowerCase())
                );
                isLoading.value = false;
            }
        };

        onMounted(() => {
            fetchCompanies().then(() => {
                filterCompanies();
            });
        });

        return {
            companies,
            filteredCompanies,
            isLoading,
            query,
            noimage,
        };
    },
};
</script>

<style scoped></style>
<template>
    <div class="min-h-screen flex flex-col justify-between">
        <Header :companies="companies" />
        <div class="wrapper grow">
            <div v-if="isLoading" class="font-medium text-4xl mt-6">Loading...</div>
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

<style scoped>

</style>
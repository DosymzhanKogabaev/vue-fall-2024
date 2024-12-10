<template>
    <div>
        <Header :companies="companies" />
        <div class="wrapper">
            <div class="mt-6">
                <div class="font-medium text-4xl">Find your dream company</div>
                <div class="text-xl mt-4">
                    Reviews, salaries and work atmosphere in companies
                </div>
                <div class="mt-6 w-full border rounded-2xl p-8 bg-[#f4f9ff]">
                    <SearchCompanies :companies="companies" />
                    <div class="flex justify-between mt-6">
                        <div class="flex gap-4 text-[#3460a4] my-auto">
                            <div class="py-[2.8px]">Popular: </div>
                            <ul v-if="companies.length > 0" class="flex gap-2">
                                <li v-for="company in companies.slice(0, 3)" :key="company._id" class="flex">
                                    <NuxtLink :to="`/company/${encodeURIComponent(company.companyName)}`" class="my-auto">
                                        <span
                                            class="border rounded-3xl px-4 py-0.5 bg-white hover:bg-[#a6bee3] hover:text-white">
                                            {{ company.companyName }}
                                        </span>
                                    </NuxtLink>
                                </li>
                            </ul>
                            <div v-else class="py-[2.8px]">Loading...</div>
                        </div>
                        <div class="flex gap-4">
                            <div>
                                <div class="text-center font-semibold">{{ reviewsCount }}</div>
                                <div>reviews</div>
                            </div>
                            <div>
                                <div class="text-center font-semibold">{{ companies.length }}</div>
                                <div>companies</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6"></div>
            <HomepageInfo />
        </div>
        <div className="mt-6"></div>
        <HomePageCompaniesList />
        <div className="mt-6"></div>
        <PopularCompanies :companies="companies" />
        <div className="mt-6"></div>
        <HomePageCreateCompany />
        <div className="mt-6"></div>
        <HomePageReviews />
        <Footer />
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getCompaniesList } from '../services/companyService.js';
import Header from '../components/header.vue';
import SearchCompanies from '../components/searchCompanies.vue';
import HomepageInfo from '../components/homepageInfo.vue';
import HomePageCompaniesList from '../components/homepageCompaniesList.vue';
import PopularCompanies from '../components/popularCompanies.vue';
import HomePageReviews from '../components/homepageReviews.vue';
import HomePageCreateCompany from '../components/homepageCreateCompany.vue';
import Footer from '../components/footer.vue';

export default {
    components: {
        Header,
        SearchCompanies,
        HomepageInfo,
        HomePageCompaniesList,
        PopularCompanies,
        HomePageReviews,
        HomePageCreateCompany,
        Footer,
    },
    setup() {
        const companies = ref([]);
        const reviewsCount = ref(0);

        const fetchCompanies = async () => {
            const response = await getCompaniesList();
            const sortedCompanies = response.sort((a, b) => b.rating - a.rating);
            companies.value = sortedCompanies;
            reviewsCount.value = sortedCompanies.reduce((count, company) => count + company.comments.length, 0);
        };

        onMounted(fetchCompanies);

        return {
            companies,
            reviewsCount,
        };
    },
};
</script>

<style scoped></style>
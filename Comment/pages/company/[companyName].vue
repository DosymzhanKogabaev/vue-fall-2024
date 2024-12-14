<template>
    <div>
        <template v-if="!company">
            <div class="flex h-screen w-screen">
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
        <template
            v-else-if="company && (tab === 'info' || tab === 'reviews' || tab === 'salaries' || tab === 'interviews')">
            <div class="min-h-screen flex flex-col justify-between">
                <header-component :companies="companies" />
                <div class="wrapper grow">
                    <div class="mt-6">
                        <div class="flex gap-8">
                            <div class="w-[96px] h-[96px] flex">
                                <img class="rounded-xl my-auto" :src="company.imgUrl ? company.imgUrl : noimage"
                                    :class="{ 'border': !company.imgUrl }" />
                            </div>
                            <div>
                                <div class="text-2xl font-semibold">{{ company.companyName }}</div>
                                <div class="flex mt-2">
                                    <div>{{ company.rating.toFixed(1) }}</div>
                                    <star-rating :rating="company.rating" />
                                </div>
                            </div>
                        </div>
                        <div class="mt-6">
                            <ul class="flex">
                                <li>
                                    <nuxt-link :to="`/company/${companyName}?tab=info`"
                                        :class="{ 'bg-[#f4f9ff] border-t-2 border-[#3460a4]': tab === 'info' }"
                                        class="flex gap-x-2 px-3 py-4">
                                        <div>Company</div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#9E9E9E">
                                            <path
                                                d="M14 8h1a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2m0 4h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2M9 8h1a1 1 0 1 0 0-2H9a1 1 0 0 0 0 2m0 4h1a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2m12 8h-1V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v17H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m-8 0h-2v-4h2zm5 0h-3v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5H6V4h12z" />
                                        </svg>
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link :to="`/company/${companyName}?tab=reviews`"
                                        :class="{ 'bg-[#f4f9ff] border-t-2 border-[#3460a4]': tab === 'reviews' }"
                                        class="flex gap-x-2 px-3 py-4">
                                        <div>Reviews</div>
                                        <div class="text-[#757575]">{{ company.comments.length }}</div>
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link :to="`/company/${companyName}?tab=salaries`"
                                        :class="{ 'bg-[#f4f9ff] border-t-2 border-[#3460a4]': tab === 'salaries' }"
                                        class="flex gap-x-2 px-3 py-4">
                                        <div>Vacancies</div>
                                        <div class="text-[#757575]">{{ company.salaries.length }}</div>
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link :to="`/company/${companyName}?tab=interviews`"
                                        :class="{ 'bg-[#f4f9ff] border-t-2 border-[#3460a4]': tab === 'interviews' }"
                                        class="flex gap-x-2 px-3 py-4">
                                        <div>Interviews</div>
                                        <div class="text-[#757575]">{{ company.interviews.length }}</div>
                                    </nuxt-link>
                                </li>
                            </ul>
                        </div>
                        <div class="h-10 bg-gradient-to-b from-[#f4f9ff] to-[#fff]"></div>
                        <div class="mt-6 mb-12">
                            <component :is="currentTabComponent" :company="company" />
                        </div>
                    </div>
                </div>
                <footer-component />
            </div>
        </template>

        <template v-else>
            <not-found />
        </template>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { getCompanyByName, getCompaniesList } from '../../services/companyservice.js';
import NotFound from '../notfound.vue';
import HeaderComponent from '../../components/header.vue';
import FooterComponent from '../../components/footer.vue';
import StarRating from '../../components/starRating.vue';
import CompanyInfo from '../../components/companyInfo.vue';
import CompanyReviews from '../../components/companyReviews.vue';
import CompanySalaries from '../../components/companySalaries.vue';
import CompanyInterviews from '../../components/companyInterviews.vue';
import noimage from '../../assets/no-image.jpg';

const companies = ref([]);
const company = ref(null);
const route = useRoute();
const companyName = route.params.companyName;
const tab = ref(new URLSearchParams(window.location.search).get('tab') || 'info');

const fetchCompany = async () => {
    console.log(tab.value)
    const response = await getCompanyByName(companyName);
    company.value = response;
};

const fetchCompanies = async () => {
    const response = await getCompaniesList();
    const sortedCompanies = response.sort((a, b) => b.rating - a.rating);
    companies.value = sortedCompanies;
};

onMounted(() => {
    fetchCompany();
    fetchCompanies();
});

watch(
    () => route.query.tab,
    (newTab) => {
        tab.value = newTab || 'info';
    },
    { immediate: true }
);

const currentTabComponent = computed(() => {
    switch (tab.value) {
        case 'reviews':
            return CompanyReviews;
        case 'salaries':
            return CompanySalaries;
        case 'interviews':
            return CompanyInterviews;
        default:
            return CompanyInfo;
    }
});
</script>

<style scoped>
.wrapper {
    width: 1200px;
    margin: 0 auto;
}
</style>
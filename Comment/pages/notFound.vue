<template>
    <div class="min-h-screen flex flex-col justify-between">
        <Header :companies="companies" />
        <div class="wrapper grow flex">
            <div class="my-auto">
                <div class="font-medium text-4xl">
                    Sorry! The page you are looking for<br />
                    cannot be found
                </div>
                <button @click="handleNavigate"
                    class="mt-6 flex text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-8 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    Go to Home
                </button>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getCompaniesList } from '../services/companyService.js';
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';

export default {
    components: {
        Header,
        Footer,
    },
    setup() {
        const companies = ref([]);

        const fetchCompanies = async () => {
            const response = await getCompaniesList();
            const sortedCompanies = response.sort((a, b) => b.rating - a.rating);
            companies.value = sortedCompanies;
        };

        const handleNavigate = () => {
            // Use the Nuxt Router to navigate to the home page
            this.$router.push('/');
        };

        onMounted(fetchCompanies);

        return {
            companies,
            handleNavigate,
        };
    },
};
</script>

<style scoped>

</style>
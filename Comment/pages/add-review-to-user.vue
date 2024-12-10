<template>
    <div class="min-h-screen flex flex-col justify-between">
        <header-component :companies="companies" />
        <div>
            Add Review to user
        </div>
        <footer-component />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getCompaniesList } from '../services/companyService.js';
import HeaderComponent from '../components/header.vue';
import FooterComponent from '../components/footer.vue';

const companies = ref([]);

const fetchCompanies = async () => {
    const response = await getCompaniesList();
    const sortedCompanies = response.sort((a, b) => b.rating - a.rating);
    companies.value = sortedCompanies;
};

onMounted(() => {
    fetchCompanies();
});
</script>

<style scoped>

</style>
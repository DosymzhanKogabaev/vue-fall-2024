<template>
    <div class="py-8 wrapper">
        <div class="text-center text-3xl font-medium">
            Popular companies
        </div>
        <div class="text-center text-xl mt-4">
            Companies with a large number of employee reviews and popular among job seekers
        </div>
        <div class="grid grid-cols-3 mt-6 gap-4">
            <HomePageCompanyCard v-for="company in companies.slice(0, 6)" :key="company._id" :company="company" />
        </div>
    </div>
</template>

<script>
import HomePageCompanyCard from "./HomePageCompanyCard.vue";

export default {
    name: "PopularCompanies",
    components: {
        HomePageCompanyCard,
    },
    props: {
        companies: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped>

</style>
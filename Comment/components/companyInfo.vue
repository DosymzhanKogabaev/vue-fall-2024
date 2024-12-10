<template>
    <div>
        <div class="text-3xl font-medium mb-10">About this company</div>
        <div v-if="hasCompanyInfo" class="border rounded-2xl shadow py-6 px-6">
            <div class="grid grid-cols-4">
                <div v-if="company.websiteUrl">
                    <div class="text-[#bdbdbd]">Company website</div>
                    <a :href="company.websiteUrl" class="text-[#3460a4]">{{ company.websiteUrl }}</a>
                </div>
                <div v-if="company.employeesNumber">
                    <div class="text-[#bdbdbd]">Number of employees</div>
                    <div>{{ company.employeesNumber }}</div>
                </div>
                <div v-if="company.city">
                    <div class="text-[#bdbdbd]">City (head office)</div>
                    <div>{{ company.city }}</div>
                </div>
                <div v-if="company.yearFounded">
                    <div class="text-[#bdbdbd]">Year founded</div>
                    <div>{{ company.yearFounded }}</div>
                </div>
            </div>
            <div v-if="company.description" class="border-t mt-4 pt-2">{{ company.description }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        company: {
            type: Object,
            required: true
        }
    },
    computed: {
        hasCompanyInfo() {
            return this.company.websiteUrl || this.company.employeesNumber || this.company.city || this.company.yearFounded || this.company.description;
        }
    }
};
</script>
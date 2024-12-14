<template>
    <div v-if="salaries.length > 0">
        <div class="text-3xl font-medium mb-10">
            Vacancies for {{ company.companyName }}
        </div>
        <ul>
            <li v-for="(salary, index) in salaries" :key="index">
                <div class="border bg-white px-8 py-6 rounded-xl mb-4">
                    <div class="mt-4 font-bold text-xl">{{ salary.vacancy }}</div>
                    <div class="mt-4 text-lg">{{ salary.salary }} ₸</div>
                    <div class="h-px bg-gray-200 mt-4"></div>
                    <div class="mt-4 font-bold">Description:</div>
                    <pre class="break-words">{{ salary.description }}</pre>
                </div>
            </li>
        </ul>
    </div>
    <div v-else class="text-3xl font-medium mb-10">
        No Vacancies for {{ company.companyName }}
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
    data() {
        return {
            salaries: [],
        };
    },
    async created() {
        await this.fetchSalaries()
    },
    methods: {
        async fetchSalaries() {
            if (this.company && this.company.salaries) {
                const salariesList = [...this.company.salaries];
                this.salaries = salariesList;
            }
        },
    }
};
</script>
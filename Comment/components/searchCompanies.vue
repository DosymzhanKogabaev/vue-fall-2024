<template>
    <div>
        <div class="relative w-full">
            <div class="flex items-center">
                <div class="relative w-full">
                    <input type="text"
                        class="border border-gray-300 rounded-l-xl px-4 py-2 w-full focus:outline-0 pr-10"
                        placeholder="Search companies..." v-model="query" @focus="dropdownVisible = true" />
                    <button v-if="query" class="absolute right-0 top-0 bottom-0 px-2 flex items-center text-gray-500"
                        @click="clearQuery">
                        &#x2715;
                    </button>
                </div>
                <button @click="handleSearch" class="bg-blue-500 text-white px-4 py-2 rounded-r-xl flex items-center">
                    <span v-if="loading">
                        <svg class="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4">
                            </circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                        </svg>
                    </span>
                    Search
                </button>
            </div>
            <ul v-if="dropdownVisible && filteredCompanies.length > 0"
                class="absolute z-10 w-full bg-white border border-gray-300 mt-2 rounded-xl shadow-lg max-h-48 overflow-y-auto">
                <li v-for="company in filteredCompanies" :key="company._id"
                    class="hover:bg-blue-100 first:hover:rounded-tl-xl last:hover:rounded-bl-xl">
                    <nuxt-link :to="`/company/${encodeURIComponent(company.companyName)}`" @click="clearQuery">
                        <div class="px-4 py-2 w-full">{{ company.companyName }}</div>
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    name: 'SearchCompanies',
    props: {
        companies: {
            type: Array,
            required: true,
        },
    },
    setup(props) {
        const query = ref('');
        const filteredCompanies = ref([]);
        const loading = ref(false);
        const dropdownVisible = ref(false);

        const handleSearch = () => {
            if (query.value.trim()) {
                // Redirect to search page with query
                window.location.href = `/search/${encodeURIComponent(query.value)}`;
                clearQuery();
            }
        };

        const clearQuery = () => {
            query.value = '';
            dropdownVisible.value = false;
        };

        const filterCompanies = () => {
            if (query.value.length > 0) {
                filteredCompanies.value = props.companies.filter((company) =>
                    company.companyName.toLowerCase().includes(query.value.toLowerCase())
                );
                dropdownVisible.value = filteredCompanies.value.length > 0;
            } else {
                filteredCompanies.value = [];
                dropdownVisible.value = false;
            }
        };

        const handleClickOutside = (event) => {
            const dropdown = document.querySelector('.dropdown');
            if (dropdown && !dropdown.contains(event.target)) {
                dropdownVisible.value = false;
            }
        };

        onMounted(() => {
            document.addEventListener('mousedown', handleClickOutside);
        });

        onUnmounted(() => {
            document.removeEventListener('mousedown', handleClickOutside);
        });
        
        watch(
            () => query.value,
            () => {
                filterCompanies()
            }
        )

        return {
            query,
            filteredCompanies,
            loading,
            dropdownVisible,
            handleSearch,
            clearQuery,
            filterCompanies,
        };
    },
};
</script>

<style scoped>

</style>
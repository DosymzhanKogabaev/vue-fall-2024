<template>
    <div class="min-h-screen flex flex-col justify-between">
        <Header :companies="companies" />
        <div class="wrapper grow">
            <div class="border rounded-2xl shadow my-6 py-8 px-10">
                <div class="text-center text-2xl font-medium">
                    Submit info about the interview you had with the company
                </div>
                <div class="text-center text-xl mt-6">
                    Your feedback will help people make informed career decisions!
                </div>
                <div class="flex w-full mt-6 gap-x-6">
                    <div class="w-1/2">
                        <div class="text-lg font-medium">Company name</div>
                        <div class="relative w-full mt-2">
                            <input type="text" class="border rounded w-full py-2 px-3"
                                placeholder="Search for a company..."
                                v-model="searchInput" @focus="showDropdown = true" />
                            <ul v-if="showDropdown && filteredCompanies.length > 0"
                                class="absolute w-full bg-white border rounded mt-1 max-h-40 overflow-y-auto z-10">
                                <li v-for="company in filteredCompanies" :key="company.id"
                                    class="p-2 hover:bg-gray-200 cursor-pointer" @click="handleCompanySelect(company)">
                                    {{ company.companyName }}
                                </li>
                            </ul>
                        </div>
                        <div v-if="submitted && !selectedCompany" class="text-sm text-red-600 mt-1">
                            Please select the company!
                        </div>
                    </div>
                    <div class="w-1/2">
                        <div class="text-lg font-medium">Job title</div>
                        <div class="w-full mt-2">
                            <input type="text" class="border rounded w-full py-2 px-3" placeholder="Frontend developer"
                                v-model="jobTitle" />
                        </div>
                        <div v-if="submitted && jobTitle.trim() === ''" class="text-sm text-red-600 mt-1">
                            Please add your job title!
                        </div>
                    </div>
                </div>
                <div class="flex w-full mt-6 gap-x-2 justify-center">
                    <div class="text-lg font-medium">
                        Rate the difficulty of the interview from 1 to 5:
                    </div>
                    <PutStarRating @ratingSelect="handleDifficultySelect" />
                </div>
                <div v-if="submitted && selectedDifficulty === 0" class="text-center text-sm text-red-600 mt-1">
                    Please choose the rating!
                </div>
                <div class="mt-6 text-lg font-medium">
                    Tell as much as you can about the interview that you had
                </div>
                <div class="mt-2">
                    <textarea v-model="description" rows="3" class="w-full p-2 border rounded resize-none"
                        style="min-height: 3em"
                        placeholder="Describe the interview process: topics covered, questions asked, and overall experience." />
                </div>
                <div v-if="submitted && description.trim() === ''" class="text-sm text-red-600 mt-1">
                    Please add a description to your review!
                </div>
                <button @click="handleSendReview" class="bg-[#0063aa] text-white px-4 py-2 mt-6 rounded"
                    :disabled="isLoading">
                    Submit Interview
                </button>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import PutStarRating from '../components/PutStarRating.vue';
import { getCompaniesList } from '../services/companyService';
import axios from 'axios';

const router = useRouter();
const companies = ref([]);
const searchInput = ref('');
const filteredCompanies = ref([]);
const showDropdown = ref(false);
const selectedCompany = ref(null);
const jobTitle = ref('');
const selectedDifficulty = ref(0);
const description = ref('');
const submitted = ref(false);
const isLoading = ref(false);

onMounted(async () => {
    const response = await getCompaniesList()
    companies.value = response.sort((a, b) => b.rating - a.rating);
});

watch(searchInput, async (newValue) => {
    if (newValue.trim() === '' || (selectedCompany.value && selectedCompany.value.companyName?.toLowerCase() === newValue.toLowerCase())) {
        filteredCompanies.value = [];
        showDropdown.value = false;
    } else {
        const filtered = companies.value.filter((company) => company.companyName.toLowerCase().includes(newValue.toLowerCase()));
        filteredCompanies.value = filtered;
        showDropdown.value = true;
    }
});

const handleCompanySelect = (company) => {
    searchInput.value = company.companyName;
    showDropdown.value = false;
    selectedCompany.value = company;
};

const handleDifficultySelect = (difficulty) => {
    selectedDifficulty.value = difficulty;
};

const handleSendReview = async () => {
    submitted.value = true;
    if (selectedCompany.value && jobTitle.value.trim() !== '' && selectedDifficulty.value !== 0 && description.value.trim() !== '') {
        isLoading.value = true;
        let author = JSON.parse(localStorage.getItem("user"));
        let isSuccessful = false;
        try {
            const interviewData = {
                userId: author._id,
                companyId: selectedCompany.value._id,
                description: description.value,
                difficulty: selectedDifficulty.value,
                jobTitle: jobTitle.value,
            };
            await axios.post('http://comment-service-backend.onrender.com/interviews', interviewData);
            isSuccessful = true;
        } catch (error) {
            console.error('Error sending interview:', error);
        } finally {
            isLoading.value = false;
            if(isSuccessful) {
                alert(
                    `Your interview info was successfully added`
                );
                router.push(`/company/${selectedCompany.value.companyName}?tab=interviews`);
            }
        }
    }
};

</script>

<style scoped></style>
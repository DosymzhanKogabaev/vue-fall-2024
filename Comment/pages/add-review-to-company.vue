<template>
    <div class="min-h-screen flex flex-col justify-between">
        <Header :companies="companies" />
        <div class="wrapper grow">
            <div class="border rounded-2xl shadow my-6 py-8 px-10">
                <div class="text-center text-2xl font-medium">
                    {{ isUser ? 'Rate your company' : 'Rate An Employee' }}
                </div>
                <div class="text-center text-xl mt-6">
                    {{ isUser ? 'Your feedback will help people make informed career decisions!' : 'Your feedback will help other companies when choosing an employee!' }}
                </div>
                <div class="text-2xl font-medium mt-8">
                    {{ isUser ? 'A few words about your place of work' : 'A few words about your employee' }}
                </div>
                <div class="flex w-full mt-4">
                    <button @click="toCurrent"
                        :class="isCurrent ? 'bg-[#0063aa] text-white w-1/2 py-4 border-none rounded-l-lg' : 'bg-[#f0f9ff] w-1/2 py-4 border border-[#ccebff] rounded-l-lg'">
                        {{ isUser ? 'Current place of work' : 'Current employee' }}
                    </button>
                    <button @click="toPrevious"
                        :class="!isCurrent ? 'bg-[#0063aa] text-white w-1/2 py-4 border-none rounded-r-lg' : 'bg-[#f0f9ff] w-1/2 py-4 border border-[#ccebff] rounded-r-lg'">
                        {{ isUser ? 'Previous place of work' : 'Previous employee' }}
                    </button>
                </div>
                <div class="flex w-full mt-6 gap-x-6">
                    <div class="w-1/2">
                        <div class="text-lg font-medium">{{ isUser ? 'Company name' : 'Employee username' }}</div>
                        <div class="relative w-full mt-2">
                            <input type="text" class="border rounded w-full py-2 px-3"
                                :placeholder="isUser ? 'Search for a company...' : 'Search for an employee...'"
                                v-model="searchInput" @focus="showDropdown = true" />
                            <ul v-if="showDropdown && filteredCompanies.length > 0"
                                class="absolute w-full bg-white border rounded mt-1 max-h-40 overflow-y-auto z-10">
                                <li v-for="company in filteredCompanies" :key="company.id"
                                    class="p-2 hover:bg-gray-200 cursor-pointer" @click="handleCompanySelect(company)">
                                    {{ isUser ? company.companyName : company.username }}
                                </li>
                            </ul>
                        </div>
                        <div v-if="submitted && !selectedCompany" class="text-sm text-red-600 mt-1">
                            {{ isUser ? 'Please select the company!' : 'Please select the employee!' }}
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
                        Rate the {{ isUser ? 'company' : 'employee' }} from 1 to 5:
                    </div>
                    <PutStarRating @ratingSelect="handleRatingSelect" />
                </div>
                <div v-if="submitted && selectedRating === 0" class="text-center text-sm text-red-600 mt-1">
                    Please choose the rating!
                </div>
                <div class="mt-6 text-lg font-medium">
                    Tell as much as you can about the {{ isUser ? 'company' : 'employee' }}
                </div>
                <div class="mt-2">
                    <textarea v-model="description" rows="3" class="w-full p-2 border rounded resize-none"
                        style="min-height: 3em"
                        :placeholder="isUser ? 'Indicate the positive or negative aspects of the company that are important to you.' : 'Indicate the positive or negative aspects of the employee that are important to you.'" />
                </div>
                <div v-if="submitted && description.trim() === ''" class="text-sm text-red-600 mt-1">
                    Please add a description to your review!
                </div>
                <div class="text-2xl font-medium mt-8">
                    {{ isUser ? 'Would you recommend this company to a friend?' : 'Would you recommend this employee to another company?' }}
                </div>
                <div class="flex gap-x-8 mt-2">
                    <button
                        :class="recommend ? 'bg-[#0063aa] text-white px-8 py-4 border-none rounded-full flex gap-x-4' : 'bg-[#f0f9ff] py-4 px-8 border border-[#ccebff] rounded-full flex gap-x-4'"
                        @click="toRecommend">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M29.0996 20.3952C29.7321 19.611 30.0354 18.7704 29.9967 17.9046C29.958 16.9511 29.5191 16.2045 29.1577 15.7465C29.5772 14.7302 29.7386 13.1305 28.3381 11.8883C27.312 10.9787 25.5695 10.5709 23.1558 10.6838C21.4585 10.7591 20.0387 11.0665 19.9806 11.079H19.9741C19.6515 11.1355 19.3094 11.2045 18.9609 11.2798C18.9351 10.8783 19.0061 9.8808 19.7676 7.63488C20.6711 4.96236 20.6195 2.91719 19.5998 1.54956C18.5285 0.112924 16.8183 0 16.3149 0C15.8309 0 15.3856 0.194479 15.0693 0.55207C14.353 1.36135 14.4369 2.85445 14.5272 3.54454C13.6753 5.76537 11.2875 11.2108 9.26749 12.7227C9.22876 12.7478 9.1965 12.7792 9.16423 12.8105C8.57049 13.4191 8.17036 14.0778 7.89931 14.655C7.51854 14.4542 7.08614 14.3413 6.62148 14.3413H2.68473C1.20038 14.3413 0 15.5144 0 16.9511V27.1455C0 28.5885 1.20684 29.7553 2.68473 29.7553H6.62148C7.19585 29.7553 7.73151 29.5797 8.17036 29.2785L9.68697 29.4542C9.91931 29.4856 14.0497 29.9937 18.2897 29.9122C19.0577 29.9686 19.7805 30 20.4517 30C21.6069 30 22.6137 29.9122 23.4527 29.7365C25.4275 29.3287 26.7763 28.5132 27.4604 27.3149C27.9832 26.399 27.9832 25.4893 27.8993 24.9122C29.1835 23.7829 29.4094 22.5345 29.3642 21.6562C29.3384 21.1481 29.2223 20.7152 29.0996 20.3952ZM2.68473 28.0615C2.16198 28.0615 1.74249 27.6474 1.74249 27.1455V16.9448C1.74249 16.4366 2.16844 16.0289 2.68473 16.0289H6.62148C7.14422 16.0289 7.56371 16.4429 7.56371 16.9448V27.1393C7.56371 27.6474 7.13777 28.0552 6.62148 28.0552H2.68473V28.0615ZM27.4475 19.6612C27.1765 19.9373 27.1248 20.3576 27.3313 20.6838C27.3313 20.6901 27.5959 21.1292 27.6282 21.7315C27.6734 22.5533 27.2668 23.2811 26.4149 23.9021C26.1116 24.128 25.989 24.5169 26.118 24.8683C26.118 24.8745 26.3956 25.7026 25.9438 26.4868C25.5114 27.2396 24.5498 27.7792 23.0913 28.0803C21.9232 28.325 20.3356 28.3689 18.3865 28.2183C18.3607 28.2183 18.3285 28.2183 18.2962 28.2183C14.1465 28.3061 9.95158 27.7792 9.9064 27.7729H9.89995L9.24813 27.6976C9.28685 27.522 9.30621 27.3337 9.30621 27.1455V16.9448C9.30621 16.675 9.26103 16.4115 9.18359 16.1669C9.29975 15.7465 9.62244 14.8118 10.384 14.0151C13.2817 11.7817 16.1148 4.24718 16.2375 3.92095C16.2891 3.78921 16.302 3.64492 16.2762 3.50063C16.1665 2.79799 16.2052 1.93852 16.3601 1.6813C16.7021 1.68758 17.625 1.78168 18.18 2.52823C18.8383 3.4128 18.8125 4.99373 18.1026 7.08908C17.0184 10.2823 16.928 11.9636 17.7863 12.7039C18.2123 13.074 18.7802 13.0928 19.1932 12.9486C19.5869 12.8607 19.9612 12.7854 20.3162 12.729C20.342 12.7227 20.3743 12.7164 20.4001 12.7102C22.3814 12.2898 25.9309 12.0326 27.1635 13.1242C28.209 14.0527 27.4669 15.2823 27.383 15.4141C27.1442 15.7654 27.2152 16.2233 27.5379 16.5056C27.5443 16.5119 28.2219 17.133 28.2542 17.9674C28.28 18.5257 28.009 19.0966 27.4475 19.6612Z"
                                :fill="recommend ? '#fff' : '#0063aa'"></path>
                        </svg>
                        Yes
                    </button>
                    <button
                        :class="!recommend ? 'bg-[#0063aa] text-white px-8 py-4 border-none rounded-full flex gap-x-4' : 'bg-[#f0f9ff] py-4 px-8 border border-[#ccebff] rounded-full flex gap-x-4'"
                        @click="toNotRecommend">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M29.0996 9.60477C29.7321 10.389 30.0354 11.2296 29.9967 12.0954C29.958 13.0489 29.5191 13.7955 29.1577 14.2535C29.5772 15.2698 29.7386 16.8695 28.3381 18.1117C27.312 19.0213 25.5695 19.4291 23.1558 19.3162C21.4585 19.2409 20.0387 18.9335 19.9806 18.921H19.9741C19.6515 18.8645 19.3094 18.7955 18.9609 18.7202C18.9351 19.1217 19.0061 20.1192 19.7676 22.3651C20.6711 25.0376 20.6195 27.0828 19.5998 28.4504C18.5285 29.8871 16.8183 30 16.3149 30C15.8309 30 15.3856 29.8055 15.0693 29.4479C14.353 28.6386 14.4369 27.1455 14.5272 26.4555C13.6753 24.2346 11.2875 18.7892 9.26749 17.2773C9.22876 17.2522 9.1965 17.2208 9.16423 17.1895C8.57049 16.5809 8.17036 15.9222 7.89931 15.345C7.51854 15.5458 7.08614 15.6587 6.62148 15.6587H2.68473C1.20038 15.6587 0 14.4856 0 13.0489V2.85446C0 1.41154 1.20684 0.244671 2.68473 0.244671H6.62148C7.19585 0.244671 7.73151 0.420328 8.17036 0.721457L9.68697 0.545799C9.91931 0.514431 14.0497 0.00627708 18.2897 0.0878334C19.0577 0.0313702 19.7805 1.90735e-06 20.4517 1.90735e-06C21.6069 1.90735e-06 22.6137 0.0878315 23.4527 0.263491C25.4275 0.67127 26.7763 1.48683 27.4604 2.68507C27.9832 3.60101 27.9832 4.51067 27.8993 5.08783C29.1835 6.21707 29.4094 7.4655 29.3642 8.34379C29.3384 8.85195 29.2223 9.28482 29.0996 9.60477ZM2.68473 1.93852C2.16198 1.93852 1.74249 2.35257 1.74249 2.85446V13.0552C1.74249 13.5634 2.16844 13.9711 2.68473 13.9711H6.62148C7.14422 13.9711 7.56371 13.5571 7.56371 13.0552V2.86073C7.56371 2.35257 7.13777 1.94479 6.62148 1.94479H2.68473V1.93852ZM27.4475 10.3388C27.1765 10.0627 27.1248 9.64241 27.3313 9.31619C27.3313 9.30991 27.5959 8.87077 27.6282 8.26851C27.6734 7.44668 27.2668 6.71895 26.4149 6.09787C26.1116 5.87202 25.989 5.48306 26.118 5.13175C26.118 5.12547 26.3956 4.29737 25.9438 3.51318C25.5114 2.76035 24.5498 2.22083 23.0913 1.9197C21.9232 1.67503 20.3356 1.63112 18.3865 1.78168C18.3607 1.78168 18.3285 1.78168 18.2962 1.78168C14.1465 1.69386 9.95158 2.22083 9.9064 2.2271H9.89995L9.24813 2.30239C9.28685 2.47804 9.30621 2.66625 9.30621 2.85446V13.0552C9.30621 13.325 9.26103 13.5885 9.18359 13.8331C9.29975 14.2535 9.62244 15.1882 10.384 15.9849C13.2817 18.2183 16.1148 25.7528 16.2375 26.079C16.2891 26.2108 16.302 26.3551 16.2762 26.4994C16.1665 27.202 16.2052 28.0615 16.3601 28.3187C16.7021 28.3124 17.625 28.2183 18.18 27.4718C18.8383 26.5872 18.8125 25.0063 18.1026 22.9109C17.0184 19.7177 16.928 18.0364 17.7863 17.2961C18.2123 16.926 18.7802 16.9072 19.1932 17.0514C19.5869 17.1393 19.9612 17.2146 20.3162 17.271C20.342 17.2773 20.3743 17.2836 20.4001 17.2898C22.3814 17.7102 25.9309 17.9674 27.1635 16.8758C28.209 15.9473 27.4669 14.7177 27.383 14.5859C27.1442 14.2346 27.2152 13.7767 27.5379 13.4944C27.5443 13.4881 28.2219 12.867 28.2542 12.0326C28.28 11.4743 28.009 10.9034 27.4475 10.3388Z"
                                :fill="!recommend ? '#fff' : '#0063aa'"></path>
                        </svg>
                        No
                    </button>
                </div>
                <button @click="handleSendReview" class="bg-[#0063aa] text-white px-4 py-2 mt-6 rounded"
                    :disabled="isLoading">
                    Submit Review
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
import { getUsersList } from '../services/userService';
import axios from 'axios';

const router = useRouter();
const isUser = localStorage.getItem('user') !== null;
const companies = ref([]);
const isCurrent = ref(true);
const searchInput = ref('');
const filteredCompanies = ref([]);
const showDropdown = ref(false);
const selectedCompany = ref(null);
const jobTitle = ref('');
const selectedRating = ref(0);
const description = ref('');
const recommend = ref(true);
const submitted = ref(false);
const isLoading = ref(false);

onMounted(async () => {
    const response = isUser ? await getCompaniesList() : await getUsersList();
    companies.value = response.sort((a, b) => b.rating - a.rating);
});

watch(searchInput, async (newValue) => {
    if (newValue.trim() === '' || (selectedCompany.value && ((isUser && selectedCompany.value.companyName?.toLowerCase() === newValue.toLowerCase()) || (!isUser && selectedCompany.value.username?.toLowerCase() === newValue.toLowerCase())))) {
        filteredCompanies.value = [];
        showDropdown.value = false;
    } else {
        const filtered = isUser
            ? companies.value.filter((company) => company.companyName.toLowerCase().includes(newValue.toLowerCase()))
            : companies.value.filter((company) => company.username.toLowerCase().includes(newValue.toLowerCase()));
        filteredCompanies.value = filtered;
        showDropdown.value = true;
    }
});

const handleCompanySelect = (company) => {
    if (isUser) searchInput.value = company.companyName;
    else searchInput.value = company.username;
    showDropdown.value = false;
    selectedCompany.value = company;
};

const toCurrent = () => {
    isCurrent.value = true;
};

const toPrevious = () => {
    isCurrent.value = false;
};

const toRecommend = () => {
    recommend.value = true;
};

const toNotRecommend = () => {
    recommend.value = false;
};

const handleRatingSelect = (rating) => {
    selectedRating.value = rating;
};

const handleSendReview = async () => {
    submitted.value = true;
    if (selectedCompany.value && jobTitle.value.trim() !== '' && selectedRating.value !== 0 && description.value.trim() !== '') {
        isLoading.value = true;
        let author = isUser ? JSON.parse(localStorage.getItem("user")) : JSON.parse(localStorage.getItem("company"));
        let isSuccessful = false;
        try {
            const reviewData = {
                authorId: author._id,
                toId: selectedCompany.value._id,
                jobTitle: jobTitle.value,
                rating: selectedRating.value,
                description: description.value,
                isCurrent: isCurrent.value,
                recommend: recommend.value,
            };
            await axios.post('http://comment-service-backend.onrender.com/comments', reviewData);
            isSuccessful = true;
        } catch (error) {
            console.error('Error sending review:', error);
        } finally {
            isLoading.value = false;
            if(isSuccessful) {
                alert(
                    `Your review was successfully added`
                );
                if(isUser) {
                    router.push(`/company/${selectedCompany.value.companyName}?tab=reviews`);
                }
                else {
                    router.push('/')
                }
            }
        }
    }
};

</script>

<style scoped></style>
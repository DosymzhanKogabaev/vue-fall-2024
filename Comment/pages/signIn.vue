<template>
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <nuxt-link to="/" class="flex items-center mb-6 text-2xl font-normal text-gray-900">
            <img class="h-12 mr-2" :src="logoNoTextv" alt="logo" />
            Jūmys.kz
        </nuxt-link>
        <div
            class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-medium leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Sign in to your account
                </h1>
                <div class="flex w-full mt-4">
                    <button @click="setUserType(true)"
                        :class="isUser ? 'bg-[#0063aa] text-white w-1/2 py-2 border-none rounded-l-lg' : 'bg-[#f0f9ff] w-1/2 py-2 border border-[#ccebff] rounded-l-lg'">
                        User
                    </button>
                    <button @click="setUserType(false)"
                        :class="!isUser ? 'bg-[#0063aa] text-white w-1/2 py-2 border-none rounded-r-lg' : 'bg-[#f0f9ff] w-1/2 py-2 border border-[#ccebff] rounded-r-lg'">
                        Company
                    </button>
                </div>
                <form class="space-y-4 md:space-y-6" @submit.prevent="handleLoginEvent">
                    <div>
                        <label :for="isUser ? 'username' : 'companyName'"
                            class="block mb-2 text-sm font-medium text-gray-900">
                            {{ isUser ? 'Username' : 'Company Name' }}
                        </label>
                        <input :v-model="isUser ? username : companyName" @input="updateCredentials($event)"
                            :type="isUser ? 'text' : 'text'" :name="isUser ? 'username' : 'companyName'"
                            :id="isUser ? 'username' : 'companyName'"
                            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            :placeholder="isUser ? 'YourUsername' : 'YourCompanyName'" required />
                    </div>
                    <div>
                        <label for="password"
                            class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input v-model="password" @input="setPassword($event.target.value)" type="password"
                            name="password" id="password" placeholder="••••••••"
                            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            required />
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox"
                                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                            </div>
                        </div>
                        <nuxt-link to="/"
                            class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot
                            password?</nuxt-link>
                    </div>
                    <button type="submit"
                        class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        {{ loading ? 'Loading...' : 'Sign In' }}
                    </button>
                    <div v-if="error" class="text-red-600" role="alert">{{ error }}</div>
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet?
                        <nuxt-link to="/signUp"
                            class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign
                            up</nuxt-link>
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore';
import { useCompanyStore } from '@/stores/companyStore';
import logoNoText from '@/assets/new-logo-no-text.jpg';
import useAuthRedirect from '@/composables/useAuthRedirect';

const router = useRouter();
const userStore = useUserStore();
const companyStore = useCompanyStore();

const logoNoTextv = logoNoText;

const username = ref('');
const companyName = ref('');
const password = ref('');
const isUser = ref(true);
const loading = computed(() => userStore.loadingUser || companyStore.loadingCompany);
const error = computed(() => userStore.errorUser || companyStore.errorCompany);

// Call useAuthRedirect to handle redirection if the user is already logged in
useAuthRedirect();

const setUserType = (userType) => {
    isUser.value = userType;
    username.value = '';
    companyName.value = '';
};

const updateCredentials = (event) => {
    if (isUser.value) {
        username.value = event.target.value;
    } else {
        companyName.value = event.target.value;
    }
};

const setPassword = (value) => {
    password.value = value;
};

const handleLoginEvent = async () => {
    try {
        let isLoggedIn = false;
        if (isUser.value) {
            isLoggedIn = await userStore.login({ username: username.value, password: password.value });
            if(isLoggedIn) router.push('/user-profile-page');
        } else {
            isLoggedIn = await companyStore.login({ companyName: companyName.value, password: password.value });
            if(isLoggedIn) router.push('/company-profile-page');
        }
    } catch (err) {
        console.error(err);
    }
};
</script>

<style scoped>

</style>
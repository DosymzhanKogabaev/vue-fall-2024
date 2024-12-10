<template>
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <nuxt-link to="/" class="flex items-center mb-6 text-2xl font-normal text-gray-900">
            <img class="h-12 mr-2" :src="logoNoText" alt="logo" />
            Jūmys.kz
        </nuxt-link>
        <div
            class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-medium leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Create your account
                </h1>
                <div class="flex w-full mt-4">
                    <button @click="setIsUser(true)"
                        :class="isUser ? 'bg-[#0063aa] text-white w-1/2 py-2 border-none rounded-l-lg' : 'bg-[#f0f9ff] w-1/2 py-2 border border-[#ccebff] rounded-l-lg'">
                        User
                    </button>
                    <button @click="setIsUser(false)"
                        :class="!isUser ? 'bg-[#0063aa] text-white w-1/2 py-2 border-none rounded-r-lg' : 'bg-[#f0f9ff] w-1/2 py-2 border border-[#ccebff] rounded-r-lg'">
                        Company
                    </button>
                </div>
                <form @submit.prevent="handleSignUpEvent" class="space-y-4 md:space-y-6">
                    <div>
                        <label :for="isUser ? 'username' : 'companyName'"
                            class="block mb-2 text-sm font-medium text-gray-900">
                            {{ isUser ? 'Username' : 'Company Name' }}
                        </label>
                        <input v-model="currentName" :type="'text'"
                            :name="isUser ? 'username' : 'companyName'" :id="isUser ? 'username' : 'companyName'"
                            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            :placeholder="isUser ? 'YourUsername' : 'YourCompanyName'" required />
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900">
                            Password
                        </label>
                        <input v-model="password" type="password" name="password" id="password" placeholder="••••••••"
                            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            required />
                    </div>
                    <div>
                        <label for="confirmPassword"
                            class="block mb-2 text-sm font-medium text-gray-900">
                            Confirm Password
                        </label>
                        <input v-model="confirmPassword" type="password" name="confirmPassword" id="confirmPassword"
                            placeholder="••••••••"
                            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            required />
                    </div>
                    <button type="submit"
                        class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        <span v-if="loadingUser || loadingCompany">Loading...</span>
                        <span v-else>Sign Up</span>
                    </button>
                    <div v-if="errorUser" class="text-red-600" role="alert">
                        {{ errorUser }}
                    </div>
                    <div v-if="errorCompany" class="text-red-600" role="alert">
                        {{ errorCompany }}
                    </div>
                    <div v-if="!passwordMatch" class="text-red-600" role="alert">
                        Passwords don't match!
                    </div>
                    <p class="text-sm font-light text-gray-500">
                        Already have an account?
                        <nuxt-link to="/signIn"
                            class="font-medium text-primary-600 hover:underline">
                            Sign in
                        </nuxt-link>
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useUserStore } from '@/stores/userStore'; // Adjust the path as necessary
import logoNoText from '@/assets/new-logo-no-text.jpg'; // Adjust the path as necessary
import { useRoute, useRouter } from 'vue-router';
import useAuthRedirect from '../composables/useAuthRedirect';
import { useCompanyStore } from '../stores/companyStore';

useAuthRedirect()
const route = useRoute();
const router = useRouter();
const userStore = useUserStore();
const companyStore = useCompanyStore();

const logo = logoNoText; // Store the logo path
const isUser = ref(true);
const username = ref('');
const companyName = ref('');
const password = ref('');
const confirmPassword = ref('');
const passwordMatch = ref(true);

const loadingUser = computed(() => userStore.loadingUser);
const loadingCompany = computed(() => userStore.loadingCompany);
const errorUser = computed(() => userStore.errorUser);
const errorCompany = computed(() => userStore.errorCompany);

const currentName = computed({
  get() {
    return isUser.value ? username.value : companyName.value;
  },
  set(value) {
    if (isUser.value) {
      username.value = value;
    } else {
      companyName.value = value;
    }
  },
});

const setIsUser = (value) => {
    isUser.value = value;
    router.push(`/signUp?type=${value ? 'user' : 'company'}`);
};

const handleSignUpEvent = async () => {
    if (password.value !== confirmPassword.value) {
        passwordMatch.value = false;
        return;
    } else {
        passwordMatch.value = true;
    }

    if (isUser.value) {
        const userCredentials = {
            username: username.value,
            password: password.value,
        };
        const success = await userStore.signUp(userCredentials);
        if (success) {
            alert('User successfully created');
            username.value = '';
            password.value = '';
            router.push('/signIn?type=user');
        }
    } else {
        const companyCredentials = {
            companyName: companyName.value,
            password: password.value,
        };
        const success = await companyStore.signUp(companyCredentials);
        if (success) {
            alert('Company successfully created');
            companyName.value = '';
            password.value = '';
            router.push('/signIn?type=company');
        }
    }
    console.log(username.value)
};
</script>

<style scoped>

</style>
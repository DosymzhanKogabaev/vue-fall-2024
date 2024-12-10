<template>
    <div class="border-b shadow-lg py-4">
        <div class="wrapper flex items-center justify-between">
            <div class="flex gap-x-8 items-center">
                <NuxtLink to="/">
                    <img :src="logo" class="h-16" alt="logo" />
                </NuxtLink>
                <SearchCompanies :companies="companies" />
            </div>
            <div class="flex" v-if="isAuth">
                <NuxtLink to="/add-review-to-company" class="h-full py-6 px-6 hover:bg-[#f4f9ff]">
                    <svg class="mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#3460A4">
                        <path
                            d="M12 2A10 10 0 0 0 2 12a9.9 9.9 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20m0 18H5.41l.93-.93a1 1 0 0 0 0-1.41A8 8 0 1 1 12 20m3-9h-2V9a1 1 0 1 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 1 0 0-2" />
                    </svg>
                    <div class="text-[#3460A4]">Leave Review</div>
                </NuxtLink>
                <button class="h-full py-6 px-6 hover:bg-[#f4f9ff]">
                    <svg class="mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#3460A4">
                        <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0zm-2 0v-7a6 6 0 0 0-12 0v7zm-9 4h6v2H9z" />
                    </svg>
                    <div class="text-[#3460A4]">Notifications</div>
                </button>
                <button @click="navigateToProfile" class="h-full py-6 px-6 hover:bg-[#f4f9ff]" type="button">
                    <svg class="mx-auto" xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="#3460A4">
                        <path
                            d="M16.21 12.71a6 6 0 1 0-7.42 0 10 10 0 0 0-6.22 8.18 1.006 1.006 0 1 0 2 .22 8 8 0 0 1 15.9 0 1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1 10 10 0 0 0-6.25-8.19M12.5 12a4 4 0 1 1 0-8.001 4 4 0 0 1 0 8Z" />
                    </svg>
                    <div class="text-[#3460A4]">Profile</div>
                </button>
            </div>
            <div class="flex gap-4" v-else>
                <NuxtLink to="/signIn">
                    <button
                        class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        Sign In</button>
                </NuxtLink>
                <NuxtLink to="/signUp">
                    <button
                        class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        Sign Up</button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
import logo from '~/assets/new-logo-vertical.jpg';
import SearchCompanies from './searchCompanies';

export default {
    components: {
        SearchCompanies,
    },
    props: {
        companies: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            logo,
            isAuth: this.isAuthorized(),
            isUser: this.isAuthorizedUser(),
        };
    },
    methods: {
        isAuthorized() {
            return !!localStorage.getItem('access_token');
        },
        isAuthorizedUser() {
            return !!localStorage.getItem('user');
        },
        navigateToProfile() {
            this.$router.push('/profile');
        },
    },
};
</script>

<style>
.wrapper {
    max-width: 1200px;
    margin: 0 auto;
}
</style>
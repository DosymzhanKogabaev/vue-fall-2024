<template>
    <div class="flex">
        <Sidebar />
        <div class="pt-20 px-8 bg-gray-100 w-full">
            <div class="max-w-3xl">
                <div class="text-3xl font-medium mb-4">My Profile</div>
                <div class="border bg-white px-4 py-4 rounded-xl">
                    <div>Current Username</div>
                    <div class="text-lg mb-4">{{ user.username }}</div>
                    <form @submit.prevent="handleChangePasswordEvent" class="space-y-4 md:space-y-6">
                        <div>
                            <label for="currentPassword"
                                class="block mb-2 text-sm font-medium text-gray-900">
                                Current Password
                            </label>
                            <input v-model="currentPassword" type="password" name="currentPassword" id="currentPassword"
                                placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                required />
                        </div>
                        <div class="flex justify-between gap-4">
                            <div class="w-6/12">
                                <label for="newPassword"
                                    class="block mb-2 text-sm font-medium text-gray-900">
                                    New Password
                                </label>
                                <input v-model="newPassword" type="password" name="newPassword" id="newPassword"
                                    placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required />
                            </div>
                            <div class="w-6/12">
                                <label for="confirmPassword"
                                    class="block mb-2 text-sm font-medium text-gray-900">
                                    Confirm Password
                                </label>
                                <input v-model="confirmPassword" type="password" name="confirmPassword"
                                    id="confirmPassword" placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required />
                            </div>
                        </div>
                        <div class="w-full text-right">
                            <button type="submit"
                                class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-20 py-2.5">
                                Save
                            </button>
                            <div v-if="error" class="text-red-600 mt-4" role="alert">
                                {{ error }}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/sidebar.vue';
import { comparePasswords, changeUserPassword } from '../services/userService';

export default {
    components: {
        Sidebar
    },
    data() {
        return {
            user: this.getUser(),
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
            error: ''
        };
    },
    methods: {
        getUser() {
            const user = localStorage.getItem('user');
            return JSON.parse(user);
        },
        async handleChangePasswordEvent() {
            this.error = ''; // Reset error state

            let changePassword = true;
            if (!comparePasswords(this.currentPassword, this.user.password)) {
                this.error = 'Wrong Password!';
                changePassword = false;
            }
            if (this.newPassword !== this.confirmPassword) {
                this.error = 'Passwords do not match!';
                changePassword = false;
            }
            if (changePassword) {
                try {
                    const res = await changeUserPassword(this.user._id, this.newPassword);
                    alert('Password changed successfully!');
                    this.resetForm();
                } catch (error) {
                    if (this.newPassword.length < 8) {
                        this.error = 'Password must contain at least 8 characters!';
                    } else {
                        this.error = 'Password is too weak!';
                    }
                }
            }
        },
        resetForm() {
            this.currentPassword = '';
            this.newPassword = '';
            this.confirmPassword = '';
        }
    }
};
</script>

<style scoped>

</style>
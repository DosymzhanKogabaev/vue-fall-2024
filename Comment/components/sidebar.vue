<template>
    <div class="w-1/4 px-4 py-6 border-2 h-screen flex flex-col justify-between min-w-48">
        <div>
            <div class="mb-8">
                <nuxt-link to="/">
                    <img alt="logo" src='../assets/new-logo-vertical.jpg' class="w-full" />
                </nuxt-link>
            </div>
            <nuxt-link v-if="isCompany" to="/interviews">
                <div
                    :class="activeLocation === 'interviews' ? 'border-b-2 px-2 py-4 flex gap-2 text-lg text-primary-600 bg-primary-100' : 'border-b-2 px-2 py-4 flex gap-2 text-lg text-gray-600'">
                    <div class="bg-reviews w-6 h-6 my-auto"></div>
                    <div>My interviews</div>
                </div>
            </nuxt-link>
            <nuxt-link v-if="isCompany" to="/salaries">
                <div
                    :class="activeLocation === 'salaries' ? 'border-b-2 px-2 py-4 flex gap-2 text-lg text-primary-600 bg-primary-100' : 'border-b-2 px-2 py-4 flex gap-2 text-lg text-gray-600'">
                    <div class="bg-reviews w-6 h-6 my-auto"></div>
                    <div>My vacancies</div>
                </div>
            </nuxt-link>
            <nuxt-link to="/reviews">
                <div
                    :class="activeLocation === 'reviews' ? 'border-b-2 px-2 py-4 flex gap-2 text-lg text-primary-600 bg-primary-100' : 'border-b-2 px-2 py-4 flex gap-2 text-lg text-gray-600'">
                    <div class="bg-reviews w-6 h-6 my-auto"></div>
                    <div>My Reviews</div>
                </div>
            </nuxt-link>
            <nuxt-link to="/profile">
                <div
                    :class="activeLocation === 'profile' ? 'border-b-2 px-2 py-4 flex gap-2 text-lg text-primary-600 bg-primary-100' : 'border-b-2 px-2 py-4 flex gap-2 text-lg text-gray-600'">
                    <div class="bg-user w-6 h-6 my-auto"></div>
                    <div>My Profile</div>
                </div>
            </nuxt-link>
        </div>
        <div>
            <button @click="handleLogout" class="px-2 py-4 flex gap-2 text-lg text-gray-600">
                <div class="bg-logout w-6 h-6 my-auto"></div>
                <div>Sign Out</div>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    data() {
        return {
            activeLocation: 'profile',
            isCompany: this.isAuthorizedUser(),
        };
    },
    methods: {
        handleLogout() {
            localStorage.removeItem('access_token');
            localStorage.removeItem('user');
            localStorage.removeItem('company');
            this.$router.push('/');
        },
        isAuthorizedUser() {
            return !!localStorage.getItem('company');
        },
    },
    watch: {
        $route(to) {
            if(to.path === '/reviews') {
                this.activeLocation = 'reviews'
            }
            else if(to.path === '/profile') {
                this.activeLocation = 'profile'
            }
            else if(to.path === '/salaries') {
                this.activeLocation = 'salaries'
            }
            else if(to.path === '/interviews') {
                this.activeLocation = 'interviews'
            }
        },
    },
    mounted() {
        if(this.$route.path === '/reviews') {
            this.activeLocation = 'reviews'
        }
        else if(this.$route.path === '/profile') {
            this.activeLocation = 'profile'
        }
        else if(this.$route.path === '/salaries') {
            this.activeLocation = 'salaries'
        }
        else if(this.$route.path === '/interviews') {
            this.activeLocation = 'interviews'
        }
    },
};
</script>

<style scoped>

</style>
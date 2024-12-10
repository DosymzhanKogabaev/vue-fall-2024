<template>
    <div class="home">
        <h1 class="users-title">Users</h1>
        <div v-if="loading" class="loading">Loading users...</div>
        <div v-if="error" class="error">{{ error }}</div>
        <div v-for="user in users" :key="user.id">
            <UserCard :user="user" @userClick="handleUserClick" />
        </div>
    </div>
</template>

<script>
import UserCard from '../components/UserCard.vue';

export default {
    name: 'Home',
    components: { UserCard },
    data() {
        return {
            users: [],
            loading: false,
            error: null,
        };
    },
    created() {
        this.fetchUsers();
    },
    methods: {
        async fetchUsers() {
            this.loading = true;
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                this.users = data;
            } catch (err) {
                this.error = 'Failed to load users';
            } finally {
                this.loading = false;
            }
        },
        handleUserClick(userId) {
            this.$router.push(`/user/${userId}`);
        },
    },
};
</script>

<style>
.home {
    padding: 20px;
}

.users-title {
    font-size: 48px;
    margin: 0;
}

.loading,
.error {
    font-size: 24px;
}

body {
    font-family: "Roboto", sans-serif;
}
</style>
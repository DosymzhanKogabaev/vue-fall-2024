<template>
    <div class="home">
        <h1 class="users-title">User Details</h1>
        <div v-if="loading" class="loading">Loading user details...</div>
        <div v-if="error" class="error">{{ error }}</div>
        <div v-if="user">
            <p class="user-info">ID: {{ user.id }}</p>
            <p class="user-info">Email: {{ user.email }}</p>
            <label for="name" class="user-info">Name:</label>
            <input type="text" v-model="user.name" id="name" />
            <button @click="handleEdit" class="button-2">Edit</button>
            <div v-if="user.name.length == 0" class="user-info warning">User Name cannot be empty!</div>
        </div>
    </div>
</template>

<script>
import UserCard from '../components/UserCard.vue';

export default {
    name: 'UserDetails',
    components: { UserCard },
    data() {
        return {
            user: null,
            loading: false,
            error: null,
        };
    },
    created() {
        this.fetchUserData();
    },
    beforeUnmount() {
        console.log('UserDetails component is being destroyed');
    },
    methods: {
        async fetchUserData() {
            const userId = this.$route.params.id;
            this.loading = true;
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
                const data = await response.json();
                this.user = data;
            } catch (err) {
                this.error = 'Failed to load user details';
            } finally {
                this.loading = false;
            }
        },
        handleEdit() {
            console.log('User is being edited');
        },
    },
};
</script>
<style scoped>
.user-info {
    font-size: 24px;
    margin: 8px 0;
}

input {
    margin-left: 4px;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    appearance: none;
    border-radius: 4px;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

input:focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
}

.button-2 {
    margin-left: 4px;
    background-color: rgba(51, 51, 51, 0.1);
    border-radius: 8px;
    border-width: 0;
    color: #333333;
    cursor: pointer;
    display: inline-block;
    font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    list-style: none;
    padding: 10px 12px;
    text-align: center;
    transition: all 200ms;
    vertical-align: baseline;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}
.warning {
    color: red;
}
</style>
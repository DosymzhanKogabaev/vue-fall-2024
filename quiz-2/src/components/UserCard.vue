<template>
    <div @click="onUserClick" class="user-card">
        <h3>{{ user.name }}</h3>
        <p>{{ user.email }}</p>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'UserCard',
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    methods: {
        onUserClick() {
            this.$emit('userClick', this.user.id);
        },
    },
};
</script>

<style scoped>
div {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
}

.user-card:hover {
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    ;
}
</style>
<template>
    <div>
        <!-- Add your profile content here -->
    </div>
</template>

<script>
import useAuthRedirect from '../composables/useAuthRedirect';

export default {
    setup() {
        useAuthRedirect();

        return {};
    },
};
</script>

<style scoped>

</style>
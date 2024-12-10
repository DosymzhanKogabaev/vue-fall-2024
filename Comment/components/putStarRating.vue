<template>
    <div class="flex space-x-1">
        <svg v-for="star in 5" :key="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            :fill="(hoveredRating >= star || selectedRating >= star) ? '#FFD700' : '#D3D3D3'"
            class="w-6 h-6 cursor-pointer" @mouseenter="handleMouseEnter(star)" @mouseleave="handleMouseLeave"
            @click="handleClick(star)">
            <path
                d="M12 .587l3.668 7.431 8.207 1.196-5.938 5.789 1.4 8.167L12 18.896l-7.337 3.857 1.4-8.167-5.938-5.789 8.207-1.196z" />
        </svg>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'PutStarRating',
    props: {
        onRatingSelect: {
            type: Function,
            required: true,
        },
    },
    setup(props) {
        const hoveredRating = ref(0);
        const selectedRating = ref(0);

        const handleMouseEnter = (rating) => {
            hoveredRating.value = rating;
        };

        const handleMouseLeave = () => {
            hoveredRating.value = 0;
        };

        const handleClick = (rating) => {
            selectedRating.value = rating;
            props.onRatingSelect(rating);
        };

        return {
            hoveredRating,
            selectedRating,
            handleMouseEnter,
            handleMouseLeave,
            handleClick,
        };
    },
};
</script>

<style scoped>

</style>
<template>
    <div class="flex gap-0.5 ml-1">
        <div v-for="(val, index) in starArr" :key="index" class="w-5 h-5 my-auto" :style="{
            background: `linear-gradient(90deg, #ffc107 ${val * 100}%, #bbbac0 ${val * 100}%)`
        }">
            <img src='../assets/star.png' alt="star" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'StarRating',
    props: {
        rating: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            starArr: [],
        };
    },
    created() {
        this.calculateStars();
    },
    methods: {
        calculateStars() {
            const fullStars = Math.floor(this.rating);
            this.starArr = [];

            for (let i = 1; i <= fullStars; i++) {
                this.starArr.push(1);
            }

            if (this.rating < 5) {
                const partialStar = this.rating - fullStars;
                this.starArr.push(partialStar);

                const emptyStars = 5 - this.starArr.length;
                for (let i = 1; i <= emptyStars; i++) {
                    this.starArr.push(0);
                }
            }
        },
    },
};
</script>

<style scoped>

</style>
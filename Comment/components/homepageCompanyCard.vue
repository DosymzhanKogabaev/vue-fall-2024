<template>
    <div class="border-0 rounded-2xl shadow px-4 py-4">
        <nuxt-link :to="`/company/${encodeURIComponent(company.companyName)}`">
            <div class="flex border-b pb-4 gap-2">
                <div class="w-[72px] flex">
                    <img :class="company.imgUrl ? 'rounded-xl my-auto' : 'rounded-xl border'"
                        :src="company.imgUrl ? company.imgUrl : noimage" alt="Company Image" />
                </div>
                <div class="grid grid-rows-3">
                    <div>{{ company.companyName }}</div>
                    <div class="flex">
                        <div>{{ company.rating.toFixed(1) }}</div>
                        <StarRating :rating="company.rating" />
                    </div>
                    <div class="text-[#9e9e9e]">
                        {{ company.comments.length }} {{ company.comments.length === 1 ? 'review' : 'reviews' }}
                    </div>
                </div>
            </div>
        </nuxt-link>
        <div class="grid grid-cols-3 pt-4 text-[#3460a4]">
            <div class="mx-auto">
                <nuxt-link :to="`/company/${company.companyName}?tab=reviews`">Reviews</nuxt-link>
            </div>
            <div class="w-full text-center border-l border-r">
                <nuxt-link :to="`/company/${company.companyName}?tab=salaries`">Vacancies</nuxt-link>
            </div>
            <div class="mx-auto">
                <nuxt-link :to="`/company/${company.companyName}?tab=interviews`">Interviews</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
import noimage from '../assets/no-image.jpg';
import StarRating from './StarRating.vue';

export default {
    components: {
        StarRating,
    },
    props: {
        company: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            noimage,
        };
    },
}
</script>

<style scoped>

</style>
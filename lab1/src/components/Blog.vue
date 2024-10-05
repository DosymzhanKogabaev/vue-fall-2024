<template>
    <div class="blog-grid">
        <BlogCard v-for="(card, index) in blogCards" :key="index" :title="card.title" :imgurl="card.imgurl"
            :description="card.description" :tags="card.tags" :class="getClass(index)" />
    </div>
</template>

<script>
import BlogCard from './BlogCard.vue';

export default {
    name: "Blog",
    components: {
        BlogCard,
    },
    data() {
        return {
            blogCards: [
                { title: "Blog Post 1", description: "very cute cat", tags: false, imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Tabby_cat_with_visible_nictitating_membrane.jpg/220px-Tabby_cat_with_visible_nictitating_membrane.jpg" },
                { title: "Blog Post 2", description: "very cute cat", tags: false, imgurl: "https://static01.nyt.com/images/2024/03/05/autossell/00TB-MEOWS/00TB-MEOWS-square640.jpg" },
                { title: "Blog Post 3", description: "very cute cat", tags: true, imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvCW6gQaavw2toeF-2b5V6YCFvq4Kpip5ivQ&s" },
                { title: "Blog Post 4", description: "very cute cat", tags: false, imgurl: "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg" },
                { title: "Blog Post 5", description: "very cute cat", tags: false, imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3IEf61K0yPbvk-WXHqzz_1-Oua189gIR4AQ&s" },
            ],
        };
    },
    methods: {
        getClass(index) {
            if (index === 2) {
                return 'large-card';
            } else {
                return 'small-card';
            }
        }
    }
};
</script>

<style scoped>
.blog-grid {
    display: grid;
    grid-template-columns: repeat(3);
    gap: 20px;
    height: 80%;
    grid-auto-flow: column;
    padding: 0 40px;
}

.large-card {
    grid-column: span 2;
    grid-row: span 2;
}

.small-card {
    height: 100%;
}
</style>
<template>
    <div class="w-full bg-[#f4f9ff] py-24 mt-6">
        <div class="wrapper grid grid-cols-2">
            <div>
                <div class="text-4xl font-medium">
                    Create your own<br />
                    company page now
                </div>
                <div class="text-xl mt-8">
                    Work with your employer brand by managing <br />
                    your company page on LoremIpsum
                </div>
                <nuxt-link to="/signUp?type=company">
                    <button
                        class="flex mt-6 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg pl-5 pr-3 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        Register as a Company
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                            <path fill="#fff"
                                d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                        </svg>
                    </button>
                </nuxt-link>
            </div>
            <div class="bg-[#adf] flex">
                <div class="m-auto text-6xl">some image</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomePageCreateCompany",
};
</script>

<style scoped>

</style>
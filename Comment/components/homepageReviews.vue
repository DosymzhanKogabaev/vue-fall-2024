<template>
    <div class="py-8 wrapper">
        <div class="text-center text-3xl font-medium">
            Jumys.kz helps people find their dream job
        </div>
        <div class="text-center text-xl mt-4">
            Stories of real people who use Jumys.kz
        </div>
        <div class="grid grid-cols-3 gap-x-8 mt-4">
            <div class="shadow-xl border-0 rounded-2xl">
                <div class="relative h-3/4">
                    <div class="pt-6 px-6 pb-8 bg-[#fff6da] border-0 rounded-t-2xl h-full flex flex-col">
                        <img class="w-1/2 border-0 rounded-full mx-auto" :src="peter" alt="Peter" />
                        <div class="text-center my-auto">
                            On the Dream Job website there is a section “Interviews”, where people describe their
                            experience. This way I was able to prepare well and get an offer to the company.
                        </div>
                    </div>
                    <div class="bg-[#fff6da] w-12 h-12 rotate-45 absolute left-[calc(50%-24px)] top-[calc(100%-29px)]">
                    </div>
                </div>
                <div class="h-1/4">
                    <div class="pt-8 text-center text-2xl font-medium">
                        Peter
                    </div>
                    <div class="pb-6 text-center text-xl">
                        Front-end Developer
                    </div>
                </div>
            </div>
            <div class="shadow-xl border-0 rounded-2xl">
                <div class="relative h-3/4">
                    <div class="pt-6 px-6 pb-8 bg-[#fef6f6] border-0 rounded-t-2xl h-full flex flex-col">
                        <img class="w-1/2 border-0 rounded-full mx-auto" :src="emma" alt="Emma" />
                        <div class="text-center my-auto">
                            Due to previous bad experiences, it was important for me to find a company where a
                            non-aggressive atmosphere prevails. After reading reviews from real people on Jumys.kz, I
                            was able to find a suitable.
                        </div>
                    </div>
                    <div class="bg-[#fef6f6] w-12 h-12 rotate-45 absolute left-[calc(50%-24px)] top-[calc(100%-29px)]">
                    </div>
                </div>
                <div class="h-1/4">
                    <div class="pt-8 text-center text-2xl font-medium">
                        Emma
                    </div>
                    <div class="pb-6 text-center text-xl">
                        Marketer
                    </div>
                </div>
            </div>
            <div class="shadow-xl border-0 rounded-2xl">
                <div class="relative h-3/4">
                    <div class="pt-6 px-6 pb-8 bg-[#f4fcf8] border-0 rounded-t-2xl h-full flex flex-col">
                        <img class="w-1/2 border-0 rounded-full mx-auto" :src="elizabeth" alt="Elizabeth" />
                        <div class="text-center my-auto">
                            Thanks to the Jumys.kz website, I was able to figure out what the most in-demand
                            professions are now and what the salaries are. I made my choice, took the courses and now I
                            earn more.
                        </div>
                    </div>
                    <div class="bg-[#f4fcf8] w-12 h-12 rotate-45 absolute left-[calc(50%-24px)] top-[calc(100%-29px)]">
                    </div>
                </div>
                <div class="h-1/4">
                    <div class="pt-8 text-center text-2xl font-medium">
                        Elizabeth
                    </div>
                    <div class="pb-6 text-center text-xl">
                        UX/UI designer
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import peter from "../assets/peter.jpg";
import emma from "../assets/emma.jpg";
import elizabeth from "../assets/elizabeth.jpg";

export default {
    name: "HomePageReviews",
    data() {
        return {
            peter,
            emma,
            elizabeth,
        };
    },
};
</script>

<style scoped>

</style>
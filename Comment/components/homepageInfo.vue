<template>
    <div class="grid grid-cols-3 gap-x-4">
        <div class="bg-[#fef6f6] p-6 rounded-2xl border-0">
            <div class="w-1/2 mx-auto">
                <img :src="handshake" alt="Handshake" />
            </div>
            <div class="font-medium text-3xl mt-2">
                Meet your future employer
            </div>
            <div class="text-xl mt-2">
                Reviews from employees will tell you about the advantages and features of working in companies
            </div>
        </div>
        <div class="bg-[#f9f8fe] p-6 rounded-2xl border-0">
            <div class="w-1/2 mx-auto">
                <img :src="bargraph" alt="Bar Graph" />
            </div>
            <div class="font-medium text-3xl mt-2">
                Stay up to date with the salary market
            </div>
            <div class="text-xl mt-2">
                Study market salaries for various positions and their level in specific companies
            </div>
        </div>
        <div class="bg-[#f2fdfe] p-6 rounded-2xl border-0">
            <div class="w-1/2 mx-auto">
                <img :src="checklist" alt="Checklist" />
            </div>
            <div class="font-medium text-3xl mt-2">
                Prepare for your interview
            </div>
            <div class="text-xl mt-2">
                Feedback from candidates will help you understand what to expect from the company's selection process
            </div>
        </div>
    </div>
</template>

<script>
import handshake from "../assets/handshake.png";
import checklist from "../assets/checklist.png";
import bargraph from "../assets/bar-graph.png";

export default {
    name: "HomepageInfo",
    data() {
        return {
            handshake,
            checklist,
            bargraph,
        };
    },
};
</script>

<style scoped>

</style>
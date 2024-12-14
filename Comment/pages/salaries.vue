<template>
    <div class="flex">
        <Sidebar />
        <div class="px-8 bg-gray-100 w-full">
            <div class="max-w-3xl h-screen pt-20 w-full overflow-y-scroll no-scrollbar">
                <div class="text-3xl font-medium mb-4">My Vacancies</div>
                <div v-if="salaries.length > 0 && !isEmpty">
                    <ul>
                        <li v-for="(salary, index) in salaries" :key="index">
                            <div class="border bg-white px-8 py-6 rounded-xl mb-4">
                                <input v-if="editMode && selectedSalary == salary" v-model="editVacancy" type="text" placeholder="Front-end Developer"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" />
                                <div v-else class="mt-4 font-bold text-xl">{{ salary.vacancy }}</div>
                                <input v-if="editMode && selectedSalary == salary" v-model="editSalary" type="number" placeholder="25000"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 mt-4" />
                                <div v-else class="mt-4 text-lg">{{ salary.salary }} ₸</div>
                                <div class="h-px bg-gray-200 mt-4"></div>
                                <div class="mt-4 font-bold">Description:</div>
                                <textarea v-if="editMode && selectedSalary == salary" v-model="editDescription" rows="6" placeholder="Vacancy's description"
                                    class="resize-none bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 pre-font"></textarea>
                                <pre v-else class="break-words">{{ salary.description }}</pre>
                                <div class="w-full mt-6 flex gap-x-6 justify-end">
                                    <button v-if="editMode && selectedSalary == salary" @click="setEditMode(false, salary)"
                                        class="bg-gray-300 text-black py-2.5 px-20 rounded-lg text-sm">
                                        Cancel
                                    </button>
                                    <button v-else @click="deleteVacancy(salary)"
                                        class="text-white bg-[#ff3333] hover:bg-[#ff5a5a] font-medium rounded-lg text-sm px-20 py-2.5">
                                        Delete
                                    </button>
                                    <button @click="editMode && selectedSalary == salary ? handleSaveInfo() : setEditMode(true, salary)"
                                        class="text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-20 py-2.5">
                                        {{ editMode && selectedSalary == salary ? 'Save' : 'Edit' }}
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div v-if="!addMode" class="pb-8 flex">
                        <button @click="setAddMode(true)"
                            class="text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-20 py-2.5 w-4/5 mx-auto">
                            Add Vacancy
                        </button>
                    </div>
                    <div v-else class="border bg-white px-8 py-6 rounded-xl mb-4">
                        <div class="mt-4 font-bold">Vacancy:</div>
                        <input v-model="addVacancy" type="text" placeholder="Front-end Developer"
                            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" />
                        <div class="mt-4 font-bold">Salary:</div>
                        <input v-model="addSalary" type="number" placeholder="25000"
                            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 mt-4" />
                        <div class="h-px bg-gray-200 mt-4"></div>
                        <div class="mt-4 font-bold">Description:</div>
                        <textarea v-model="addDescription" rows="6" placeholder="Vacancy's description"
                            class="resize-none bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 pre-font"></textarea>
                        <div class="w-full mt-6 flex gap-x-6 justify-end">
                            <button @click="setAddMode(false)"
                                class="bg-gray-300 text-black py-2.5 px-20 rounded-lg">
                                Cancel
                            </button>
                            <button @click="handleSaveAddInfo()"
                                class="text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-20 py-2.5">
                                Add
                            </button>
                        </div>
                    </div>
                </div>
                <div v-else class="text-xl">Loading...</div>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/sidebar.vue';
import { ref, onMounted } from 'vue';
import axios from "axios";
import { getCompanyByID } from '../services/companyService';

export default {
    components: {
        Sidebar,
    },
    setup() {
        const company = ref({});
        const salaries = ref([]);
        const isEmpty = ref(false);
        const editMode = ref(false);
        const addMode = ref(false);
        const selectedSalary = ref({});
        const editVacancy = ref(selectedSalary.value.vacancy || "")
        const editSalary = ref(selectedSalary.value.salary || 0)
        const editDescription = ref(selectedSalary.value.description || "")
        const isLoading = ref(false);
        const addVacancy = ref("");
        const addSalary = ref("");
        const addDescription = ref("");

        const getCompany = async () => {
            let companyData = JSON.parse(localStorage.getItem('company'));
            companyData = await getCompanyByID(companyData._id);
            return companyData;
        };

        const fetchCompany = async () => {
            company.value = await getCompany();
        };

        const fetchSalaries = () => {
            if (company.value && company.value.salaries) {
                const salariesList = [...company.value.salaries];
                isEmpty.value = salariesList.length === 0;
                salaries.value = salariesList;
            }
        };

        onMounted(() => {
            fetchCompany().then(() => {
                fetchSalaries();
            });
        });
        const setEditMode = (mode, salary) => {
            editMode.value = mode;
            selectedSalary.value = salary;
            editVacancy.value = selectedSalary.value.vacancy || ""
            editSalary.value = selectedSalary.value.salary || 0
            editDescription.value = selectedSalary.value.description || ""
        };
        const setAddMode = (mode) => {
            addMode.value = mode
        }
        const handleSaveInfo = async () => {
            isLoading.value = true;
            try {
                const salaryobj = {
                    vacancy: editVacancy.value,
                    description: editDescription.value,
                    salary: editSalary.value,
                }
                const res = await axios.patch(`http://localhost:3001/salaries/${selectedSalary.value._id}`, salaryobj);
                alert("Vacancy information updated!");
                setEditMode(false, salaryobj);
                window.location.reload(); 
            } catch (error) {
                console.error("Failed to update vacancy info", error);
            } finally {
                isLoading.value = false;
            }
        };

        const handleSaveAddInfo = async () => {
            try {
                const salaryobj = {
                    companyId: company.value._id,
                    vacancy: addVacancy.value,
                    description: addDescription.value,
                    salary: addSalary.value,
                }
                const res = await axios.post(`http://localhost:3001/salaries/`, salaryobj);
                alert("Vacancy was successfully added!");
                setAddMode(false);
                window.location.reload(); 
            } catch (error) {
                console.error("Failed to add vacancy", error);
            }
        }
        const deleteVacancy = async (vacancy) => {
            var answer = window.confirm("Are you sure you want to delete this vacancy?");
            if(answer) {
                try {
                    await axios.delete(`http://localhost:3001/salaries/${vacancy._id}`);
                    alert("Vacancy was successfully deleted!");
                    window.location.reload(); 
                } catch (error) {
                    console.error("Failed to delete vacancy", error);
                }
            }
        }
        return {
            company,
            salaries,
            isEmpty,
            editMode,
            addMode,
            editVacancy,
            editSalary,
            editDescription,
            addVacancy,
            addSalary,
            addDescription,
            selectedSalary,
            isLoading,
            setEditMode,
            handleSaveInfo,
            setAddMode,
            handleSaveAddInfo,
            deleteVacancy
        };
    },
};
</script>

<style scoped>
::-webkit-scrollbar {
    display: none;
}
.flex-row-reverse {
    flex-direction: row-reverse;
}
.pre-font {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-feature-settings: normal;
    font-variation-settings: normal;
    font-size: 1em;
}
</style>
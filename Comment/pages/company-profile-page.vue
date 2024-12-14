<template>
    <div class="flex">
        <Sidebar />
        <div class="pt-20 px-8 bg-gray-100 w-full">
            <div class="max-w-3xl">
                <div class="text-3xl font-medium">My Profile</div>
                <div class="flex mt-4">
                    <router-link to="/company-profile-page?tab=info"
                        :class="tab === 'info' ? 'px-4 py-3 border-b border-[#3460a4]' : 'px-4 py-3 border-b border-gray-300'">
                        Info
                    </router-link>
                    <router-link to="/company-profile-page?tab=password"
                        :class="tab === 'password' ? 'px-4 py-3 border-b border-[#3460a4]' : 'px-4 py-3 border-b border-gray-300'">
                        Password
                    </router-link>
                </div>

                <div v-if="tab === 'info'" class="border bg-white px-8 py-6 rounded-xl mt-4">
                    <div class="flex gap-4">
                        <div class="relative w-[80px] h-[80px] flex">
                            <img :src="imgUrl ? imgUrl : noimagev" alt="Company"
                                :class="imgUrl ? 'rounded-xl my-auto w-full h-full object-cover' : 'rounded-xl border w-full h-full object-cover'" />
                            <button v-if="editMode" class="absolute top-0 right-0 bg-white p-1 rounded-full shadow-md"
                                @click="setShowImageDialog(true)">
                                <VIcon name="fa-edit" />
                            </button>
                        </div>
                        <div>
                            <div class="text-2xl font-semibold">{{ company.companyName }}</div>
                            <div class="flex mt-2">
                                <div>{{ parseFloat(company.rating).toFixed(1) }}</div>
                                <StarRating :rating="company.rating" />
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-x-4 mt-4">
                        <div>
                            <div class="text-[#bdbdbd]">Company website</div>
                            <input v-if="editMode" v-model="websiteUrl" type="text" placeholder="https://google.com/"
                                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" />
                            <a v-else :href="company.websiteUrl || ''" class="text-[#3460a4]">{{ company.websiteUrl ||
                                'Edit to add' }}</a>
                        </div>

                        <div>
                            <div class="text-[#bdbdbd]">Number of employees</div>
                            <input v-if="editMode" v-model="employeesNumber" type="number" placeholder="12345"
                                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" />
                            <div v-else>{{ company.employeesNumber || 'Edit to add' }}</div>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-x-4 mt-4">
                        <div>
                            <div class="text-[#bdbdbd]">City (head office)</div>
                            <input v-if="editMode" v-model="city" type="text" placeholder="Moscow"
                                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" />
                            <div v-else>{{ company.city || 'Edit to add' }}</div>
                        </div>
                        <div>
                            <div class="text-[#bdbdbd]">Year founded</div>
                            <input v-if="editMode" v-model="yearFounded" type="number" placeholder="2024"
                                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" />
                            <div v-else>{{ company.yearFounded || 'Edit to add' }}</div>
                        </div>
                    </div>

                    <div class="border-t mt-4 pt-2">
                        <div class="text-[#bdbdbd]">Description</div>
                        <textarea v-if="editMode" v-model="description" rows="3" placeholder="Company's description"
                            class="resize-none bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"></textarea>
                        <div v-else>{{ company.description || 'Edit to add' }}</div>
                    </div>

                    <div class="w-full mt-6 flex gap-x-6 justify-end">
                        <button v-if="editMode" @click="setEditMode(false)"
                            class="bg-gray-300 text-black py-2.5 px-20 rounded-lg">
                            Cancel
                        </button>
                        <button @click="editMode ? handleSaveInfo() : setEditMode(true)"
                            class="text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-20 py-2.5">
                            {{ !editMode ? 'Edit' : isLoading ? 'Loading...' : 'Save' }}
                        </button>
                    </div>

                    <div v-if="showImageDialog"
                        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div class="bg-white p-6 rounded-lg shadow-lg w-[400px]">
                            <h3 class="text-lg font-semibold mb-4">Edit Image URL</h3>
                            <input v-model="imageUrlInput" type="text" placeholder="Enter Image URL"
                                class="w-full p-2 border border-gray-300 rounded mb-4" @input="handleImageChange" />
                            <div v-if="!isValidUrl && imageUrlInput" class="text-red-600">Invalid Image Url</div>
                            <div v-if="!imageUrlInput" class="text-red-600">Empty Image Url</div>
                            <img :src="isValidUrl ? imageUrlInput : noimagev" alt="Preview"
                                class="mx-auto w-32 object-cover my-4" />
                            <div class="flex justify-end gap-4">
                                <button class="bg-gray-300 text-black py-2 px-4 rounded-lg"
                                    @click="setShowImageDialog(false)">Cancel</button>
                                <button @click="handleSaveImage"
                                    class="text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg px-4 py-2"
                                    :disabled="!isValidUrl">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="tab === 'password'" class="border bg-white px-8 py-6 rounded-xl mt-4">
                    <form @submit.prevent="handleChangePasswordEvent">
                        <div>
                            <label for="currentPassword" class="block mb-2 text-sm font-medium text-gray-900">Current
                                Password</label>
                            <input v-model="currentPassword" type="password" id="currentPassword" placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                required />
                        </div>
                        <div class="flex justify-between gap-4 mt-6">
                            <div class="w-6/12">
                                <label for="newPassword" class="block mb-2 text-sm font-medium text-gray-900">
                                    New Password
                                </label>
                                <input v-model="newPassword" type="password" name="newPassword" id="newPassword"
                                    placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required />
                            </div>
                            <div class="w-6/12">
                                <label for="confirmPassword" class="block mb-2 text-sm font-medium text-gray-900">
                                    Confirm Password
                                </label>
                                <input v-model="confirmPassword" type="password" name="confirmPassword"
                                    id="confirmPassword" placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required />
                            </div>
                        </div>
                        <div class="w-full text-right mt-6">
                            <button type="submit"
                                class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-20 py-2.5">
                                Save
                            </button>
                            <div v-if="error" class="text-red-600 mt-4" role="alert">
                                {{ error }}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import Sidebar from "@/components/sidebar.vue";
import StarRating from "@/components/starRating.vue";
import { comparePasswords, changeCompanyPassword } from "@/services/companyService";
import axios from "axios";
import noimage from "@/assets/no-image.jpg";
import { useRoute, useRouter } from "vue-router";

export default {
    components: { Sidebar, StarRating },
    setup() {
        const route = useRoute();
        const router = useRouter();

        const company = ref(JSON.parse(localStorage.getItem("company")) || {});
        const tab = ref(route.query.tab || "info");
        const editMode = ref(false);
        const showImageDialog = ref(false);
        const isLoading = ref(false);
        const isValidUrl = ref(true);
        const currentPassword = ref("");
        const newPassword = ref("")
        const confirmPassword = ref("");
        const error = ref("");
        const websiteUrl = ref(company.value.websiteUrl || "");
        const employeesNumber = ref(company.value.employeesNumber || "")
        const city = ref(company.value.city || "")
        const yearFounded = ref(company.value.yearFounded || "")
        const description = ref(company.value.description || "")
        const imgUrl = ref(company.value.imgUrl || "")
        const imageUrlInput = ref(company.value.imgUrl || "")

        const noimagev = noimage

        const handleChangePasswordEvent = async () => {
            if (!comparePasswords(currentPassword.value, company.value.password)) {
                error.value = "Wrong Password!";
                return;
            }
            if (newPassword.value !== confirmPassword.value) {
                error.value = "Passwords do not match!";
                return;
            }
            try {
                const res = await changeCompanyPassword(company.value._id, newPassword.value);
                alert("Password changed successfully!");
                error.value = "";
            } catch (err) {
                error.value = "Failed to change password.";
            }
        };

        const handleImageChange = (event) => {
            const imageUrl = event.target.value;
            const urlRegex = /^(https?:\/\/[^\s/$.?#].[^\s]*)$/;
            isValidUrl.value = urlRegex.test(imageUrl);
            imageUrlInput.value = imageUrl;
        };

        const handleSaveImage = () => {
            imgUrl.value = imageUrlInput.value;
            setShowImageDialog(false);
        };

        const setEditMode = (mode) => {
            editMode.value = mode;
        };

        const setShowImageDialog = (visible) => {
            showImageDialog.value = visible;
        };

        const handleSaveInfo = async () => {
            isLoading.value = true;
            try {
                const companyobj = {
                    websiteUrl: websiteUrl.value,
                    employeesNumber: employeesNumber.value,
                    city: city.value,
                    yearFounded: yearFounded.value,
                    description: description.value,
                    imgUrl: imgUrl.value
                }
                const res = await axios.patch(`http://localhost:3001/companies/${company.value._id}`, companyobj);
                localStorage.setItem('company', JSON.stringify(res.data))
                company.value = JSON.parse(localStorage.getItem("company")) || {}
                alert("Company information updated!");
                setEditMode(false);
            } catch (error) {
                console.error("Failed to update company info", error);
            } finally {
                isLoading.value = false;
            }
        };

        onMounted(() => {
            router.replace({ path: "/company-profile-page", query: { tab: tab.value } });
        });

        watch(
            () => route.query.tab,
            (newTab) => {
                tab.value = newTab || 'info'
            }
        )

        return {
            currentPassword,
            newPassword,
            confirmPassword,
            error,
            websiteUrl,
            employeesNumber,
            city,
            yearFounded,
            description,
            imgUrl,
            imageUrlInput,
            editMode,
            showImageDialog,
            isLoading,
            isValidUrl,
            handleChangePasswordEvent,
            handleImageChange,
            handleSaveImage,
            setEditMode,
            setShowImageDialog,
            handleSaveInfo,
            tab,
            company,
            noimagev
        };
    }
};
</script>

<style scoped></style>
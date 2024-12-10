import { defineStore } from 'pinia';
import axios from 'axios';

const api = 'http://localhost:3001';

export const useCompanyStore = defineStore('company', {
    state: () => ({
        loadingCompany: false,
        company: null,
        errorCompany: null,
    }),
    actions: {
        async login(companyCredentials) {
            this.loadingCompany = true;
            this.errorCompany = null;
            try {
                const request = await axios.post(`${api}/auth/login-company`, companyCredentials);
                const response = await request.data;

                const request2 = await axios.get(`${api}/auth/profile-company`, {
                    headers: {
                        "Authorization": `Bearer ${response.access_token}`,
                    },
                });

                localStorage.setItem('access_token', response.access_token);
                localStorage.setItem('company', JSON.stringify(request2.data));
                this.company = request2.data; // Set company data
                return true;
            } catch (error) {
                if (error.response.status === 404) {
                    this.errorCompany = 'Company not found';
                } else if (error.response.status === 401) {
                    this.errorCompany = 'Wrong password';
                } else {
                    this.errorCompany = error.message;
                }
                return false;
            } finally {
                this.loadingCompany = false;
            }
        },

        async signUp(companyCredentials) {
            this.loadingCompany = true;
            this.errorCompany = null;
            try {
                const request = await axios.post(`${api}/companies/signup`, companyCredentials);
                return request.data; // Return response for further handling if needed
            } catch (error) {
                this.errorCompany = error.message; // Capture the error message
            } finally {
                this.loadingCompany = false;
            }
        },
    },
});

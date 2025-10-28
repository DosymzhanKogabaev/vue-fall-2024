import { defineStore } from 'pinia';
import axios from 'axios';

const api = 'http://comment-service-backend.onrender.com';

export const useUserStore = defineStore('user', {
    state: () => ({
        loadingUser: false,
        user: null,
        errorUser: null,
    }),
    actions: {
        async login(userCredentials) {
            this.loadingUser = true;
            this.errorUser = null;
            try {
                const request = await axios.post(`${api}/auth/login-user`, userCredentials);
                const response = await request.data;

                const request2 = await axios.get(`${api}/auth/profile-user`, {
                    headers: {
                        "Authorization": `Bearer ${response.access_token}`,
                    },
                });

                localStorage.setItem('access_token', response.access_token);
                localStorage.setItem('user', JSON.stringify(request2.data));
                this.user = request2.data; // Set user data
                return true;
            } catch (error) {
                if (error.response.status === 404) {
                    this.errorUser = 'Username not found';
                } else if (error.response.status === 401) {
                    this.errorUser = 'Wrong password';
                } else {
                    this.errorUser = error.message;
                }
                return false;
            } finally {
                this.loadingUser = false;
            }
        },

        async signUp(userCredentials) {
            this.loadingUser = true;
            this.errorUser = null;
            try {
                const request = await axios.post(`${api}/users/signup`, userCredentials);
                return request.data; // Return response for further handling if needed
            } catch (error) {
                this.errorUser = error.message; // Capture the error message
            } finally {
                this.loadingUser = false;
            }
        },
    },
});

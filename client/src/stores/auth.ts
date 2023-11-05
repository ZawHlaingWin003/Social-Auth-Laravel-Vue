import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        authUser: null,
        authStatus: null,
        authErrors: [],
        authToken: "",
        isFacebookButtonLoading: false,
        isGoogleButtonLoading: false,
        isGithubButtonLoading: false,
    }),
    getters: {
        user: (state) => state.authUser,
        errors: (state) => state.authErrors,
        status: (state) => state.authStatus,
    },
    actions: {
        async getToken() {
            await axios.get("/sanctum/csrf-cookie");
        },
        async getUser() {
            await this.getToken();
            const data = await axios.get("/api/user");
            this.authUser = data.data;
        },
        async handleSocialLogin(provider: any, data: any) {
            switch (provider) {
                case "facebook":
                    this.isFacebookButtonLoading = true;
                    break;
                case "google":
                    this.isGoogleButtonLoading = true;
                    break;
                case "github":
                    this.isGithubButtonLoading = true;
                    break;
                default:
                    break;
            }

            try {
                const response = await axios.post(
                    `/auth/${provider}/callback`,
                    data
                );
                this.authUser = response.data.user;
                this.authToken = response.data.token;

                localStorage.setItem("authToken", this.authToken);
                localStorage.setItem("authStatus", JSON.stringify(true));
                localStorage.setItem("authUser", JSON.stringify(this.authUser));
            } catch (error: any) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },
        async handleLogin(data: any) {
            this.authErrors = [];
            await this.getToken();

            try {
                await axios.post("/login", {
                    email: data.email,
                    password: data.password,
                });
                this.router.push("/");
            } catch (error: any) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },
        async handleRegister(data: any) {
            this.authErrors = [];
            await this.getToken();
            try {
                await axios.post("/register", {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    password_confirmation: data.password_confirmation,
                });
                this.router.push("/");
            } catch (error: any) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },
        async handleLogout() {
            await axios.post("/logout");
            this.authUser = null;
        },
        async handleForgotPassword(email: string) {
            this.authErrors = [];
            this.getToken();
            try {
                const response = await axios.post("/forgot-password", {
                    email: email,
                });
                this.authStatus = response.data.status;
            } catch (error: any) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },
        async handleResetPassword(resetData: any) {
            this.authErrors = [];
            try {
                const response = await axios.post("/reset-password", resetData);
                this.authStatus = response.data.status;
            } catch (error: any) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },
    },
});

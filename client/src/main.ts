import "./assets/css/style.css";

import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import type { Router } from "vue-router";

const pinia = createPinia();
declare module "pinia" {
    export interface PiniaCustomProperties {
        router: Router;
    }
}
pinia.use(({ store }) => {
    store.router = markRaw(router);
});

const app = createApp(App);
app.use(pinia);
app.use(router);

// Vue3GoogleLogin
import vue3GoogleLogin from "vue3-google-login";
app.use(vue3GoogleLogin, {
    clientId:
        "611464660510-qog69eser9a31fvqnq1b7e65dq895dpu.apps.googleusercontent.com",
});

// UniversalSocialAuth
import axios, { type AxiosInstance } from "axios";
import UniversalSocialauth from "universal-social-auth";
declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        $axios: AxiosInstance;
        $Oauth: UniversalSocialauth;
    }
}
const options = {
    providers: {
        github: {
            clientId: "**************",
            redirectUri: `${import.meta.env.BASE_URL}/auth/github/callback`,
        },
        google: {
            clientId: "***************",
            redirectUri: `${import.meta.env.BASE_URL}/auth/google/callback`,
        },
        facebook: {
            clientId: "************",
            redirectUri: `${import.meta.env.BASE_URL}/auth/facebook/callback`,
        },
    },
};
const axiosInstance: any = axios;
const Oauth: UniversalSocialauth = new UniversalSocialauth(
    axiosInstance,
    options
);
app.config.globalProperties.$Oauth = Oauth;
app.config.globalProperties.$axios = axios;

app.mount("#app");

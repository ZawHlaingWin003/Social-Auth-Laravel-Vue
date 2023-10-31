import "./assets/css/style.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import axios, { type AxiosInstance } from "axios";

const app = createApp(App);
app.use(createPinia());
app.use(router);

import vue3GoogleLogin from "vue3-google-login";
app.use(vue3GoogleLogin, {
    clientId:
        "611464660510-qog69eser9a31fvqnq1b7e65dq895dpu.apps.googleusercontent.com",
});

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
            redirectUri: "https://myapp.com/auth/github/callback",
        },
        google: {
            clientId: "***************",
            redirectUri: "https://myapp.com/auth/google/callback",
        },
        facebook: {
            clientId: "************",
            redirectUri: "https://myapp.com/auth/facebook/callback",
        },
    },
};
const Oauth: UniversalSocialauth = new UniversalSocialauth(axios, options);
app.config.globalProperties.$Oauth = Oauth;
app.config.globalProperties.$axios = axios;

app.mount("#app");

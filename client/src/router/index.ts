import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/about",
            name: "about",
            component: () => import("../views/AboutView.vue"),
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: () => import("../views/Dashboard.vue"),
        },
        {
            path: "/login",
            name: "login",
            component: () => import("../views/Login.vue"),
        },
        {
            path: "/register",
            name: "register",
            component: () => import("../views/Register.vue"),
        },
        {
            path: "/forgot-password",
            name: "ForgotPassword",
            component: () => import("../views/ForgotPassword.vue"),
        },
        {
            path: "/password-reset/:token",
            name: "ResetPassword",
            component: () => import("../views/ResetPassword.vue"),
        },

        {
            path: "/auth/:provider/callback",
            component: {
                template: '<div class="auth-component"></div>',
            },
        },
    ],
});

export default router;

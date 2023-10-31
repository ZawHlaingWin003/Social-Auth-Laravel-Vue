<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
    <header class="flex justify-between p-4 border-b-2">
        <img
            alt="Vue logo"
            class="logo"
            src="@/assets/logo.svg"
            width="125"
            height="125"
        />

        <div class="p-10 wrapper">
            <nav class="space-x-4">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/dashboard" class="hidden"
                    >Dashboard</RouterLink
                >
                <RouterLink to="/register">Register</RouterLink>
                <RouterLink to="/login">Login</RouterLink>
            </nav>
        </div>
    </header>

    <div class="py-12">
        <RouterView />
    </div>
</template>

<style scoped></style>

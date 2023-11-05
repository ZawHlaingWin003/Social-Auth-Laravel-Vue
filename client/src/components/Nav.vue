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
                <template v-if="!authStore.user">
                    <RouterLink to="/register">Register</RouterLink>
                    <RouterLink to="/login">Login</RouterLink>
                </template>
                <template v-else>
                    <RouterLink to="/dashboard" class="hidden"
                        >Dashboard</RouterLink
                    >
                </template>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();
</script>

<style scoped></style>

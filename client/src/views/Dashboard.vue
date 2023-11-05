<template>
    <div>
        <h1>Welcome to the dashboard! Mr . David</h1>
        <button @click="authStore.handleLogout">Logout Here</button>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();
</script>

<style scoped></style>

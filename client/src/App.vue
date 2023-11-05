<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Nav from "./components/Nav.vue";
</script>

<template>
    <Nav />

    <div class="py-12">
        <RouterView />
    </div>
</template>

<style scoped></style>

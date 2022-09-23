<script setup lang="ts">
import { inject, onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
const axios = inject("axios");
onMounted(async () => {
  const response = await axios.get("/workers/get-all");
});

import LayoutHeader from "./components/Layout/Header.vue";
import HomeView from "./views/HomeView.vue";
</script>

<template>
  <LayoutHeader />

  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>

  <RouterView />
</template>

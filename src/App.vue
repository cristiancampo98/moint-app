<script setup lang="ts">
import { inject, onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
const axios = inject("axios");
onMounted(async () => {
  const response = await axios.get("/workers/get-all");
});

import Header from "./components/Layout/Header.vue";
import HomeView from "./views/HomeView.vue";
</script>

<template>
  <Header />
  <HomeView />
</template>

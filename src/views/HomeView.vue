<script setup lang="ts">
import { onMounted, ref } from "vue";
import workerService from "@/services/workerService";

import CardProfile from "@/components/users/CardProfile.vue";

const users = ref([]);
async function getAllWorkers() {
  const result = await workerService.getAllWorkers();
  users.value = result.data.data.items;
}

onMounted(() => {
  getAllWorkers();
});
</script>

<template>
  <div class="tw-container tw-bg-white">
    <div class="tw-px-6 tw-pt-3 tw-pb-3">
      <div class="tw-flex tw-justify-between tw-py-4">
        <span class="tw-text-gray-600 tw-font-bold">Los mejores servicios</span>
        <img src="filtro.svg" alt="" />
      </div>
      <div>
        <span class="tw-text-gray-400"
          >Tenemos las empresas y empleados <br />
          mas profesionales para ti</span
        >
      </div>
      <div class="tw-flex tw-justify-evenly tw-pt-4">
        <a
          class="tw-w-1/3 tw-text-center tw-rounded-md tw-py-2 tw-px-3 tw-text-sm tw-text-white tw-cursor-pointer tw-tracking-wider"
          style="background-color: #f88e42"
          >Recomendados</a
        >
        <a
          class="tw-w-1/3 tw-text-center tw-rounded-md tw-py-2 tw-px-3 tw-text-sm tw-text-white tw-cursor-pointer tw-tracking-wider"
          style="background-color: #f6b21b"
          >Empresas</a
        >
      </div>
    </div>
    <div
      v-if="users.length"
      class="tw-px-5 tw-py-5 tw-grid tw-grid-cols-2 tw-gap-5"
    >
      <CardProfile v-for="(user, key) in users" :key="key" :user="user" />
    </div>
  </div>
</template>

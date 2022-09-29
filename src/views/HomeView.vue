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
    <div class="tw-px-6 md:tw-px-20 lg:tw-px-16 xl:tw-px-24 2xl:tw-px-36 tw-pt-3 tw-pb-3">
      <div class="tw-flex tw-justify-between tw-py-4">
        <span class="tw-text-gray-600 tw-font-bold sm:tw-text-[18px] lg:tw-text-[20px] 2xl:tw-text-[22px]">Los mejores
          servicios</span>
        <img src="filtro.svg" alt="" />
      </div>
      <div>
        <span class="tw-text-gray-400 sm:tw-text-[18px] lg:tw-text-[20px] 2xl:tw-text-[22px]">Tenemos las empresas y
          empleados <br />
          mas profesionales para ti</span>
      </div>
      <div class="tw-flex tw-pt-4 tw-space-x-3">
        <a class="tw-w-[120px] sm:tw-w-[130px] lg:tw-w-[150px] lg:tw-text-[18px] 2xl:tw-w-[180px] 2xl:tw-text-[20px] sm:tw-text-[15px]  tw-text-center tw-rounded-md tw-py-2 tw-px-3 tw-text-[13px] tw-text-white tw-cursor-pointer tw-tracking-wider"
          style="background-color: #f88e42">Recomendados</a>
        <a class="tw-w-[120px] sm:tw-w-[130px] lg:tw-w-[150px] lg:tw-text-[18px] 2xl:tw-w-[180px] 2xl:tw-text-[20px] sm:tw-text-[15px] tw-text-center tw-rounded-md tw-py-2 tw-px-7 tw-text-[13px] tw-text-white tw-cursor-pointer tw-tracking-wider"
          style="background-color: #f6b21b">Empresas</a>
      </div>
    </div>
    <div v-if="users.length"
      class="tw-content-center tw-px-5 md:tw-px-20 lg:tw-px-16 xl:tw-px-24 2xl:tw-px-36 tw-py-5 tw-grid tw-grid-cols-2 sm:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-5 lg:tw-gap-8 xl:tw-gap-10 2xl:tw-gap-12">
      <CardProfile v-for="(user, key) in users" :key="key" :user="user" />
    </div>
  </div>
</template>

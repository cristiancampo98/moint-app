<script setup lang="ts">
import type User from "@/interfaces/User";
import { computed } from "vue";
const props = defineProps<{
  user: User;
}>();

const getImage = computed(() => {
  return `http://mointt.com${props.user.photo}`;
});
</script>
<template>
  <div class="tw-bg-white tw-rounded-md tw-overflow-hidden tw-shadow-md">
    <img
      :src="getImage"
      alt=""
      class="tw-w-full tw-h-32 tw-sm:42 tw-object-cover"
    />
    <div class="tw-m-4">
      <span class="tw-block tw-text-gray-500 tw-text-sm"
        >Calificacion 3 <img src="start.svg" alt="" class="tw-inline tw-mb-1"
      /></span>
      <div class="tw-flex tw-justify-start">
        <span class="tw-block tw-text-gray-500 tw-text-sm">Estado: </span>

        <span class="tw-text-green-400 tw-text-sm">Disponible</span>
      </div>
      <div class="tw-flex tw-justify-start">
        <span class="tw-block tw-text-gray-500 tw-text-sm">Categoría: </span>

        <span class="tw-text-gray-500 tw-text-sm">Albañil</span>
      </div>
      <div class="tw-flex tw-justify-start">
        <span class="tw-block tw-text-gray-500 tw-text-sm">Nombre: </span>

        <span class="tw-text-gray-500 tw-text-sm">Jorge Eliecer Ángulo</span>
      </div>
    </div>
    <div class="tw-flex tw-justify-center">
      <a
        href="/detail"
        class="tw-rounded-t-lg tw-py-1 tw-px-3 tw-text-sm tw-font-bold tw-text-white tw-cursor-pointer tw-tracking-wider"
        style="background-color: #f6b21b"
        >Ver detalle</a
      >
    </div>
  </div>
</template>

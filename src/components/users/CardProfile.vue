<script setup lang="ts">
import User from "@/interfaces/User";
import { computed } from "vue";
const props = defineProps<{
  user: User;
}>();

const getImage = computed(() => {
  return `http://mointt.com${props.user.photo}`;
});

const getFullName = computed(() => {
  return `${props.user.name} ${props.user.last_name}`;
});

const getCategory = computed(() => {
  return props.user.data_worker.category.name;
});

function getDefaultImg(event) {
  return (event.target.src =
    "https://cdn.nerdschalk.com/wp-content/uploads/2021/01/instagram-user-blocked.png?width=800");
}
</script>
<template>
  <div
    class="tw-bg-white tw-rounded-md tw-overflow-hidden tw-shadow-md tw-border tw-border-[#D9D9D9]"
  >
    <img
      :src="getImage"
      @error="getDefaultImg"
      alt=""
      class="tw-w-full tw-h-32 sm:tw-h-48 md:tw-h-36 lg:tw-h-48 tw-object-fill"
    />
    <div class="tw-grid tw-grid-cols-2 tw-space-y-1 tw-px-2 tw-items-center">
      <div>
        <p
          class="tw-text-gray-500 tw-text-[10px] sm:tw-text-sm md:tw-text-base lg:tw-text-[15px] tw-font-medium"
        >
          Calificacion
        </p>
      </div>
      <div>
        <p
          class="tw-text-gray-500 tw-text-[10px] sm:tw-text-sm md:tw-text-base lg:tw-text-[15px] tw-font-medium"
        >
          3 <img src="start.svg" alt="" class="tw-inline tw-mb-1" />
        </p>
      </div>
      <div>
        <p
          class="tw-text-gray-500 tw-text-[10px] sm:tw-text-sm md:tw-text-base lg:tw-text-[15px] tw-font-medium"
        >
          Estado:
        </p>
      </div>
      <div>
        <p
          class="tw-text-green-400 tw-text-[10px] sm:tw-text-sm md:tw-text-base lg:tw-text-[15px] tw-font-medium"
        >
          Disponible
        </p>
      </div>
      <div>
        <p
          class="tw-text-gray-500 tw-text-[10px] sm:tw-text-sm md:tw-text-base lg:tw-text-[15px] tw-font-medium"
        >
          Categoría:
        </p>
      </div>
      <div>
        <p
          class="tw-text-gray-500 tw-text-[10px] sm:tw-text-sm md:tw-text-base lg:tw-text-[15px] tw-leading-3"
        >
          {{ getCategory }}
        </p>
      </div>
      <div>
        <p
          class="tw-text-gray-500 tw-text-[10px] sm:tw-text-sm md:tw-text-base lg:tw-text-[15px] tw-font-medium"
        >
          Nombre:
        </p>
      </div>
      <div>
        <p
          class="tw-text-gray-500 tw-text-[10px] sm:tw-text-sm md:tw-text-base lg:tw-text-[15px] tw-capitalize tw-leading-3"
        >
          {{ getFullName }}
        </p>
      </div>
    </div>
    <div class="tw-flex tw-justify-center tw-mt-3 tw-items-end">
      <a
        href="/InfoUserView"
        class="tw-rounded-t-lg tw-py-1 tw-px-4 tw-text-[13px] tw-font-medium tw-text-white tw-cursor-pointer tw-tracking-wider"
        style="background-color: #f6b21b"
        >Ver detalle</a
      >
    </div>
  </div>
</template>
<style scoped></style>

<script setup lang="ts">
import { NButton, NCard, NModal } from "naive-ui";
import type User from "../../interfaces/User";
import { computed, ref } from "vue";
import workerService from "../../services/workerService";
const props = defineProps<{
  user: User;
}>();

const showModal = ref(false);
const worker = ref({});
const loading = ref(false);

const getImage = computed(() => {
  return `http://mointt.com${props.user.photo}`;
});

const getFullName = computed(() => {
  return `${props.user.name} ${props.user.last_name}`;
});

const getCategory = computed(() => {
  return props.user.data_worker.category.name;
});

function getDefaultImg(event: any) {
  return (event.target.src =
    "https://cdn.nerdschalk.com/wp-content/uploads/2021/01/instagram-user-blocked.png?width=800");
}

async function getWorkerById(id: Number) {
  loading.value = true;
  const result = await workerService.getWorkerById(id);
  loading.value = false;
  if (result.status === 200) {
    worker.value = result.data.data;
    showModal.value = true;
  }
}
</script>
<template>
  <div
    class="tw-flex tw-flex-col tw-items-stretch tw-justify-between tw-bg-white tw-rounded-md tw-overflow-hidden tw-shadow-md tw-border tw-border-[#D9D9D9]"
  >
    <div>
      <div class="tw-h-48 sm:tw-h-56 2xl:tw-h-72 tw-relative">
        <n-button
          color="#f6b21b"
          class="tw-hidden md:tw-flex tw-absolute tw-top-3 tw-right-3 tw-rounded-lg tw-py-1 tw-px-4 tw-bg-[#f6b21b] tw-text-[13px] sm:tw-text-[15px] tw-font-medium tw-text-white tw-cursor-pointer tw-tracking-wider"
          :loading="loading"
          @click="getWorkerById(props.user.id)"
          >Ver detalles</n-button
        >
        <img
          :src="getImage"
          @error="getDefaultImg"
          alt=""
          class="tw-h-48 sm:tw-h-56 2xl:tw-h-72 tw-object-cover tw-object-top tw-w-full"
        />
      </div>

      <div class="tw-grid tw-grid-cols-2 tw-space-y-1 tw-px-2 tw-items-center">
        <div>
          <p
            class="tw-text-gray-500 tw-text-[12px] xl:tw-text-base sm:tw-text-sm md:tw-text-base lg:tw-text-[15px] tw-font-medium"
          >
            Calificacion
          </p>
        </div>
        <div>
          <p
            class="tw-text-gray-500 tw-text-[12px] xl:tw-text-base sm:tw-text-sm md:tw-text-base lg:tw-text-[15px] tw-font-medium"
          >
            3 <img src="/start.svg" alt="" class="tw-inline tw-mb-1" />
          </p>
        </div>
        <div>
          <p
            class="tw-text-gray-500 tw-text-[12px] xl:tw-text-base sm:tw-text-sm md:tw-text-base lg:tw-text-[15px] tw-font-medium"
          >
            Estado:
          </p>
        </div>
        <div>
          <p
            class="tw-text-green-400 tw-text-[12px] xl:tw-text-base sm:tw-text-sm md:tw-text-base lg:tw-text-[15px] tw-font-medium"
          >
            Disponible
          </p>
        </div>
        <div>
          <p
            class="tw-text-gray-500 tw-text-[12px] xl:tw-text-base sm:tw-text-sm md:tw-text-base lg:tw-text-[15px] tw-font-medium"
          >
            Categoría:
          </p>
        </div>
        <div>
          <p
            class="tw-text-gray-500 tw-text-[12px] xl:tw-text-base sm:tw-text-sm md:tw-text-base lg:tw-text-[15px] tw-leading-3"
          >
            {{ getCategory }}
          </p>
        </div>
        <div>
          <p
            class="tw-text-gray-500 tw-text-[12px] xl:tw-text-base sm:tw-text-sm md:tw-text-base lg:tw-text-[15px] tw-font-medium"
          >
            Nombre:
          </p>
        </div>
        <div>
          <p
            class="tw-text-gray-500 tw-text-[12px] xl:tw-text-base sm:tw-text-sm md:tw-text-base lg:tw-text-[15px] tw-capitalize tw-leading-3"
          >
            {{ getFullName }}
          </p>
        </div>
      </div>
    </div>

    <div class="tw-flex md:tw-hidden tw-justify-center tw-mt-3 tw-items-end">
      <router-link
        :to="`/worker-detail/${props.user.id}`"
        class="tw-rounded-t-lg tw-py-1 tw-px-4 tw-text-[13px] sm:tw-text-[15px] tw-font-medium tw-text-white tw-cursor-pointer tw-tracking-wider"
        style="background-color: #f6b21b"
        >Ver detalle</router-link
      >
    </div>
    <n-modal class="tw-w-[626px] tw-rounded-2xl" v-model:show="showModal">
      <n-card role="dialog" aria-modal="true" footer-style="padding:0;">
        <div
          class="tw-flex tw-justify-between tw-items-center tw-border-b-2 tw-border-[#091E4221] tw-mb-9 tw-pb-3"
        >
          <h1 class="tw-text-[#778CA2] tw-font-semibold tw-text-base">
            Foto de perfil
          </h1>
          <img
            @click="showModal = false"
            class="tw-cursor-pointer"
            src="/ic_close.svg"
            alt="Icon"
          />
        </div>
        <div
          class="tw-border tw-border-gray-200 tw-rounded-xl tw-grid tw-grid-cols-2"
        >
          <div class="tw-py-6 tw-pl-5">
            <img
              class="tw-w-[212px] tw-h-[166px] tw-rounded-xl"
              :src="`https://mointt.com${worker.foto}`"
              alt="Imagen"
            />
          </div>
          <div class="tw-py-6">
            <h1 class="tw-text-sm tw-font-medium tw-text-[#778CA2]">
              Calificacion
            </h1>
            <img src="/grup_start.svg" alt="Rate" />
            <div class="tw-grid tw-grid-cols-2 tw-mt-6 tw-gap-y-3">
              <h1 class="tw-text-sm tw-font-medium tw-text-[#778CA2]">
                Nombre
              </h1>
              <p class="tw-text-sm tw-text-[#778CA2]">
                {{ worker.name }} {{ worker.last_name }}
              </p>
              <h1 class="tw-text-sm tw-font-medium tw-text-[#778CA2]">
                Estado
              </h1>
              <p class="tw-text-sm tw-text-[#40BA6D] tw-font-medium">-to do-</p>
              <h1 class="tw-text-sm tw-font-medium tw-text-[#778CA2]">
                Valor por día
              </h1>
              <p class="tw-text-sm tw-text-[#778CA2]">-to do-</p>
            </div>
          </div>
        </div>
        <div class="tw-grid tw-grid-cols-2 tw-gap-x-20 tw-mt-12 tw-px-14">
          <div class="tw-grid tw-grid-cols-2 tw-gap-y-3">
            <h1 class="tw-text-sm tw-font-medium tw-text-[#778CA2]">
              Categoría
            </h1>
            <p class="tw-text-sm tw-text-[#778CA2]">-to do-</p>
            <h1 class="tw-text-sm tw-font-medium tw-text-[#778CA2]">Oficio</h1>
            <p class="tw-text-sm tw-text-[#778CA2]">-to do-</p>
            <h1 class="tw-text-sm tw-font-medium tw-text-[#778CA2]">
              Experiencia
            </h1>
            <p class="tw-text-sm tw-text-[#778CA2]">-to do-</p>
            <h1 class="tw-text-sm tw-font-medium tw-text-[#778CA2]">
              Ubicación
            </h1>
            <p class="tw-text-sm tw-text-[#778CA2]">{{ worker.barrio }}</p>
          </div>
          <div class="tw-grid tw-grid-cols-2 tw-gap-y-0">
            <h1 class="tw-text-sm tw-font-medium tw-text-[#778CA2]">RH</h1>
            <p class="tw-text-sm tw-text-[#778CA2]">-to do-</p>
            <h1 class="tw-text-sm tw-font-medium tw-text-[#778CA2]">EPS</h1>
            <p class="tw-text-sm tw-text-[#778CA2]">-to do-</p>
            <h1 class="tw-text-sm tw-font-medium tw-text-[#778CA2]">ARL</h1>
            <p class="tw-text-sm tw-text-[#778CA2]">-to do-</p>
          </div>
        </div>
        <template #footer>
          <div
            class="tw-flex tw-justify-center tw-bg-[#F4F4F4] tw-py-4 tw-rounded-b-2xl"
          >
            <n-button
              color="#40BA6D"
              class="tw-bg-[#40BA6D] tw-px-10 tw-font-medium tw-text-[15px]"
              >Reservar</n-button
            >
          </div>
        </template>
      </n-card>
    </n-modal>
  </div>
</template>
<style scoped></style>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import workerService from "../../services/workerService";

const loading = ref(false);
const worker = ref({});
const route = useRoute();

async function getWorkerById(id: Number) {
  loading.value = true;
  const result = await workerService.getWorkerById(id);
  loading.value = false;
  if (result.status === 200) {
    worker.value = result.data.data;
  }
}

onMounted(() => {
  const { userId } = route.params;
  getWorkerById(Number(userId));
});
</script>

<template>
  <div v-if="Object.keys(worker).length" class="tw-mx-10">
    <div class="tw-py-5">
      <RouterLink to="/">
        <img src="/volver.svg" alt="" />
      </RouterLink>
    </div>
    <div class="tw-flex tw-justify-start">
      <img
        :src="`https://mointt.com${worker.image}`"
        alt=""
        class="tw-w-[212px] tw-h-[166px] tw-object-fill tw-rounded-lg"
      />
    </div>
    <div class="tw-mt-5">
      <span class="tw-text-gray-500 tw-font-bold tw-text tw-block tw-my-2"
        >Calificación</span
      >
      <img src="/grup_start.svg" alt="" class="tw-w-3/6" />
    </div>
    <div class="tw-py-5">
      <div class="tw-py-1">
        <span class="tw-text-gray-500 tw-font-bold tw-text"
          >Nombre:
          <span class="tw-text-gray-400 tw-font-normal">{{
            worker.fullname
          }}</span>
        </span>
      </div>
      <div class="tw-py-1">
        <span class="tw-text-gray-500 tw-font-bold tw-text">Estado: </span>
        <span class="tw-text-green-400 tw-font-normal">{{
          worker.dataWorker.status.name
        }}</span>
      </div>
      <div class="tw-py-1">
        <span class="tw-text-gray-500 tw-font-bold tw-text"
          >Valor por día:
          <span class="tw-text-gray-400 tw-font-normal">{{
            worker.dataWorker.cost_per_our
          }}</span>
        </span>
      </div>
    </div>
    <div class="tw-relative">
      <div class="tw-absolute tw-inset-0 tw-flex tw-items-center">
        <div class="tw-w-full tw-border-b tw-border-gray-300"></div>
      </div>
    </div>
    <div class="tw-pt-5">
      <div class="tw-py-1">
        <span class="tw-text-gray-500 tw-font-bold tw-text"
          >Categoría:
          <span class="tw-text-gray-400 tw-font-normal"
            >{{ worker.dataWorker.category.name }}
          </span>
        </span>
      </div>
      <div class="tw-py-1">
        <span class="tw-text-gray-500 tw-font-bold tw-text"
          >Oficio:
          <span class="tw-text-gray-400 tw-font-normal">{{
            worker.dataWorker.specialty.name
          }}</span>
        </span>
      </div>
      <div class="tw-py-1">
        <span class="tw-text-gray-500 tw-font-bold tw-text"
          >Experiencia:
          <span class="tw-text-gray-400 tw-font-normal">{{
            worker.dataWorker.experience.qty
          }}</span>
        </span>
      </div>
      <div class="tw-py-1">
        <span class="tw-text-gray-500 tw-font-bold tw-text"
          >Ubicación:
          <span class="tw-text-gray-400 tw-font-normal">-to do-</span>
        </span>
      </div>
      <div class="tw-py-1">
        <span class="tw-text-gray-500 tw-font-bold tw-text"
          >RH:
          <span class="tw-text-gray-400 tw-font-normal">{{
            worker.dataWorker.rh.name
          }}</span>
        </span>
      </div>
      <div class="tw-py-1">
        <span class="tw-text-gray-500 tw-font-bold tw-text"
          >EPS:
          <span class="tw-text-gray-400 tw-font-normal">{{
            worker.dataWorker.eps.name
          }}</span>
        </span>
      </div>
      <div class="tw-py-1">
        <span class="tw-text-gray-500 tw-font-bold tw-text"
          >ARL:
          <span class="tw-text-gray-400 tw-font-normal">{{
            worker.dataWorker.arl.name
          }}</span>
        </span>
      </div>
    </div>
    <div class="tw-flex tw-justify-center tw-mt-10 tw-w-full">
      <a
        href="/PersonalInformation"
        class="tw-flex tw-justify-center tw-w-44 tw-py-3 tw-text-center tw-font-bold tw-rounded-md tw-text-sm tw-text-white tw-cursor-pointer tw-tracking-wider"
        style="background-color: #40ba6d"
        >Reservar</a
      >
    </div>
  </div>
</template>

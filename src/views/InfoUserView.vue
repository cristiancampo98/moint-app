<script setup lang="ts">
</script>

<template>
  <div class="tw-mx-10">
    <div class="tw-mt-8 tw-w-8 tw-h-8">
      <RouterLink to="/">
        <img src="volver.svg" alt="">
      </RouterLink>
    </div>
    <div class="tw-flex tw-justify-center tw-mt-8">
      <img src=" photo.svg" alt="" class="tw-w-96 tw-rounded-2xl">
    </div>
    <div class="tw-mt-5 tw-flex tw-justify-center">
      <a class="tw-p-3 tw-text-center tw-font-bold tw-rounded-md tw-text-sm tw-text-white tw-cursor-pointer tw-tracking-wider"
        style="background-color: #F88E42">Actualizar foto</a>
    </div>
    <div class="tw-relative tw-py-4">
      <div class="tw-absolute tw-inset-0 tw-flex tw-items-center">
        <div class="tw-w-full tw-border-b tw-border-gray-300"></div>
      </div>
    </div>
    <div>
      <span class="tw-text-gray-500 tw-font-bold tw-text tw-block tw-my-2">Calificación</span>
      <img src="grup_start.svg" alt="" class="tw-w-3/6">
      <span class="tw-text-gray-500 tw-font-bold tw-text tw-block tw-my-2">Empleado: <span
          class="tw-text-gray-400 tw-font-normal">Particular</span></span>
      <span class="tw-text-gray-500 tw-font-bold tw-text tw-block tw-my-2">Busca: <span
          class="tw-text-gray-400 tw-font-normal">Jefe</span></span>
      <span class="tw-text-gray-500 tw-font-bold tw-text tw-block tw-my-2">Empleado: <span
          class="tw-text-gray-400 tw-font-normal">Albañiles</span></span>
      <span class="tw-text-gray-500 tw-font-bold tw-text tw-block tw-my-2">Ubicación: <span
          class="tw-text-gray-400 tw-font-normal">Calle 72 u # 26 - 17</span></span>
    </div>
    <div class="tw-mt-10">
      <a class="tw-rounded-xl tw-p-5 tw-text-center tw-font-bold tw-text-sm tw-text-black tw-cursor-pointer tw-tracking-wider"
        style="background-color: #F4F4F4">
        <input id="link-radio" type="radio" value="">
        &nbsp; Activarme
        como trabajador / Independiente</a>
    </div>
    <div class="tw-my-12 tw-flex tw-justify-center">
      <a href="/DetailUser"
        class="tw-p-3 tw-text-center tw-font-bold tw-rounded-md tw-text-sm tw-text-white tw-cursor-pointer tw-tracking-wider"
        style="background-color: #F6B21B">Editar perfil</a>
    </div>

  </div>

</template>

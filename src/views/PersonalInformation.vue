<script setup lang="ts"></script>

<template>
  <div
    class="tw-w-full tw-h-auto tw-py-5 tw-px-10"
    style="background-color: #f8f8f8"
  >
    <RouterLink to="/DetailUser">
      <img src="/volver.svg" alt="" />
    </RouterLink>
    <div>
      <span class="tw-block tw-text-gray-500 tw-font-bold tw-text tw-my-2"
        >Datos personales</span
      >
    </div>
  </div>
  <div class="tw-mx-10">
    <div class="tw-py-10">
      <form>
        <div class="">
          <label
            for="type"
            class="tw-block tw-text-gray-500 tw-font-bold tw-text tw-mb-2"
            >Departamento:</label
          >
          <input
            type="text"
            id="type"
            class="tw-mb-2 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
          />
        </div>
        <div class="">
          <label
            for="type"
            class="tw-block tw-text-gray-500 tw-font-bold tw-text tw-mb-2"
            >Cuidad:</label
          >
          <input
            type="text"
            id="type"
            class="tw-mb-2 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
          />
        </div>
        <div class="">
          <label
            for="type"
            class="tw-block tw-text-gray-500 tw-font-bold tw-text tw-mb-2"
            >Barrio:</label
          >
          <input
            type="text"
            id="type"
            class="tw-mb-2 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
          />
        </div>
        <div class="">
          <label
            for="type"
            class="tw-block tw-text-gray-500 tw-font-bold tw-text tw-mb-2"
            >Dirección:</label
          >
          <input
            type="text"
            id="type"
            class="tw-mb-2 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
          />
        </div>
        <div class="">
          <label
            for="type"
            class="tw-block tw-text-gray-500 tw-font-bold tw-text tw-mb-2"
            >Teléfono 1:</label
          >
          <input
            type="text"
            id="type"
            class="tw-mb-2 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
          />
        </div>
        <div class="">
          <label
            for="type"
            class="tw-block tw-text-gray-500 tw-font-bold tw-text tw-mb-2"
            >Teléfono 2:</label
          >
          <input
            type="text"
            id="type"
            class="tw-mb-2 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
          />
        </div>
        <div class="tw-my-8 tw-flex tw-justify-center">
          <a
            href="#"
            class="tw-w-44 tw-p-3 tw-text-center tw-font-bold tw-rounded-md tw-text-sm tw-text-white tw-cursor-pointer tw-tracking-wider"
            style="background-color: #f6b21b"
            >Guardar cambios</a
          >
        </div>
        <div class="tw-my-8 tw-flex tw-justify-center">
          <a
            href="#"
            class="tw-w-44 tw-p-3 tw-text-center tw-font-bold tw-rounded-md tw-text-sm tw-text-white tw-cursor-pointer tw-tracking-wider"
            style="background-color: #ff6a6a"
            >Cancelar</a
          >
        </div>
      </form>
    </div>
  </div>
</template>

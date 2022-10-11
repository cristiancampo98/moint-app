<script setup lang="ts"></script>

<template>
  <div
    class="tw-w-full tw-h-auto tw-p-12 sm:tw-text-[18px] lg:tw-text-[20px] 2xl:tw-text-[22px]"
    style="background-color: #f8f8f8"
  >
    <RouterLink to="/InfoUserView" class="lg:tw-hidden">
      <img src="/volver.svg" alt="" />
    </RouterLink>
    <div>
      <span class="tw-block tw-text-gray-500 tw-font-bold tw-text tw-my-2"
        >Editar perfil</span
      >
      <span class="tw-text-gray-400 tw-font-normal"
        >Seleccione la categoría que desea editar</span
      >
    </div>
  </div>
  <div class="tw-mx-10 lg:tw-flex lg:tw-flex-row lg:tw-gap-10">
    <div class="tw-my-10 lg:tw-order-1">
      <span class="tw-block tw-text-gray-500 tw-font-bold tw-text tw-my-2"
        >Foto de perfil</span
      >
      <span
        class="tw-text-gray-400 tw-font-normal tw-block sm:tw-inline lg:tw-block"
        >Recuerde subir imagenes JPG y
      </span>
      <span
        class="tw-text-gray-400 tw-font-normal tw-block sm:tw-inline lg:tw-block"
        >que no supere un peso de 1MB</span
      >
    </div>
    <div class="xs:tw-flex xs:tw-flex-col-reverse lg:tw-flex-col">
      <div
        class="tw-mt-5 tw-flex tw-justify-start lg:tw-h-10 lg:tw-order-1 xs:tw-h-10"
      >
        <a
          class="tw-p-3 tw-w-44 tw-text-center tw-font-bold tw-rounded-md tw-text-sm tw-text-white tw-cursor-pointer tw-tracking-wider"
          style="background-color: #f88e42"
          >Actualizar foto</a
        >
      </div>
      <div class="tw-flex tw-justify-start">
        <img
          src="/photo.svg"
          alt=""
          class="tw-w-52 tw-rounded-lg sm:tw-w-80 md:tw-w-96"
        />
      </div>
    </div>
  </div>
  <div
    class="lg:tw-hidden tw-mt-10 tw-w-full tw-h-auto tw-py-2 tw-px-10"
    style="background-color: #f8f8f8"
  >
    <span class="tw-block tw-text-gray-500 tw-font-bold tw-text tw-my-2"
      >Datos personales</span
    >
  </div>
  <div class="tw-mx-10">
    <div class="tw-py-10">
      <form class="lg:tw-grid lg:tw-grid-cols-3 lg:tw-gap-4">
        <div class="">
          <label
            for="type"
            class="tw-block tw-text-gray-500 tw-font-bold tw-text tw-mb-2"
            >Tipo de trabajador:</label
          >
          <input
            type="text"
            id="type"
            class="tw-mb-2 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
          />
        </div>
        <div class="col-end-2 lg:tw-col-start-1">
          <label
            for="type"
            class="tw-block tw-text-gray-500 tw-font-bold tw-text tw-mb-2"
            >Nombre:</label
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
            >Apellido:</label
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
            >Cédula:</label
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
            >Fecha de nacimiento:</label
          >
          <input
            type="text"
            id="type"
            class="tw-mb-2 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
          />
        </div>
        <div class="tw-hidden lg:tw-block">
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
        <div class="tw-hidden lg:tw-block">
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
        <div class="tw-hidden lg:tw-block">
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
        <div class="tw-hidden lg:tw-block">
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
        <div class="col-end-2 tw-hidden lg:tw-block lg:tw-col-start-1">
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
        <div class="tw-hidden lg:tw-block">
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
        <div class="tw-my-8 tw-flex tw-justify-center lg:tw-hidden">
          <a
            href="/PersonalInformation"
            class="tw-w-44 tw-p-3 tw-text-center tw-font-bold tw-rounded-md tw-text-sm tw-text-white tw-cursor-pointer tw-tracking-wider"
            style="background-color: #f6b21b"
            >Siguiente</a
          >
        </div>
      </form>
    </div>
    <div
      class="tw-hidden lg:tw-block tw-text-end tw-my-8 lg:tw-bg-[#F4F4F4] lg:tw-justify-end lg:tw-py-3 lg:tw-pr-10 lg:tw-rounded-xl"
    >
      <a
        href="#"
        class="tw-p-3 tw-font-bold tw-text-sm lg:tw-text-[18px] 2xl:tw-text-[20px] sm:tw-text-[15px] tw-text-center tw-rounded-md tw-text-[13px] tw-text-white tw-cursor-pointer tw-tracking-wider"
        style="background-color: #ff6a6a"
        >Cancelar</a
      >
      &nbsp;&nbsp;&nbsp;&nbsp;
      <a
        href="#"
        class="tw-p-3 tw-font-bold tw-text-sm lg:tw-text-[18px] 2xl:tw-text-[20px] sm:tw-text-[15px] tw-text-center tw-rounded-md tw-text-[13px] tw-text-white tw-cursor-pointer tw-tracking-wider"
        style="background-color: #f6b21b"
        >Editar perfil</a
      >
    </div>
  </div>
</template>

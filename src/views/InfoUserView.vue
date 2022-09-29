<script setup lang="ts">
</script>

<template>
  <div class="tw-mx-10 sm:tw-text-[18px] lg:tw-text-[20px] 2xl:tw-text-[22px] lg:tw-mx-10 lg:tw-my-20">
    <div class="lg:tw-flex lg:tw-justify-around">
      <div class="tw-mt-8 tw-w-8 tw-h-8">
        <RouterLink to="/" class="lg:tw-hidden">
          <img src="volver.svg" alt="" class="sm:tw-w-10 sm:tw-h-10">
        </RouterLink>
      </div>
      <div>
        <div class="tw-flex tw-justify-center tw-mt-8">
          <img src=" photo.svg" alt=""
            class="tw-w-96 tw-rounded-2xl sm:tw-w-11/12 lg:tw-w-80 xl:tw-w-96 2xl:tw-w-[500px]">
        </div>
        <div class="tw-mt-5 tw-flex tw-justify-center lg:tw-justify-start">
          <a class="tw-p-3 tw-font-bold tw-text-sm 
       lg:tw-text-[18px] 2xl:tw-text-[20px] sm:tw-text-[15px] tw-text-center tw-rounded-md tw-text-[13px] 
       tw-text-white tw-cursor-pointer tw-tracking-wider" style="background-color: #F88E42">Actualizar foto</a>
        </div>
      </div>
      <div>
        <div class="tw-relative tw-py-4 lg:tw-hidden">
          <div class="tw-absolute tw-inset-0 tw-flex tw-items-center">
            <div class="tw-w-full tw-border-b tw-border-gray-300"></div>
          </div>
        </div>
        <div
          class="xs:tw-px-5 sm:tw-pl-10 tw-grid tw-grid-cols-2 tw-w-64 md:tw-w-80 sm:tw-w-72 lg:tw-w-64 lg:tw-mt-10 lg:tw-gap-y-2">
          <div>
            <p
              class="tw-text-gray-500 tw-text-[12px]  xl:tw-text-base   sm:tw-text-sm md:tw-text-base lg:tw-text-[15px] tw-font-bold">
              Calificacion
            </p>
            <p
              class="tw-text-gray-500 tw-text-[12px] xl:tw-text-base  sm:tw-text-sm md:tw-text-base lg:tw-text-[15px] tw-font-medium">
              <img src="grup_start.svg" alt="" class="tw-inline tw-mb-1" />
            </p>
          </div>
          <br>
          <div>
            <p
              class="tw-text-gray-500 tw-text-[12px] xl:tw-text-base  sm:tw-text-sm md:tw-text-base lg:tw-text-[15px] tw-font-bold">
              Empleado:
            </p>
          </div>
          <div>
            <p
              class="tw-text-gray-500 tw-text-[12px] xl:tw-text-base  sm:tw-text-sm md:tw-text-base lg:tw-text-[15px] tw-font-medium">
              Particular
            </p>
          </div>
          <div>
            <p
              class="tw-text-gray-500 tw-text-[12px] xl:tw-text-base sm:tw-text-sm md:tw-text-base lg:tw-text-[15px] tw-font-bold">
              Busca:
            </p>
          </div>
          <div>
            <p
              class="tw-text-gray-500 tw-text-[12px] xl:tw-text-base  sm:tw-text-sm md:tw-text-base lg:tw-text-[15px] tw-leading-3">
              Jefe
            </p>
          </div>
          <div>
            <p
              class="tw-text-gray-500 tw-text-[12px] xl:tw-text-base  sm:tw-text-sm md:tw-text-base lg:tw-text-[15px] tw-font-bold">
              Empleado:
            </p>
          </div>
          <div>
            <p
              class="tw-text-gray-500 tw-text-[12px] xl:tw-text-base  sm:tw-text-sm md:tw-text-base lg:tw-text-[15px] tw-capitalize tw-leading-3">
              Albañiles
            </p>
          </div>
          <div>
            <p
              class="tw-text-gray-500 tw-text-[12px] xl:tw-text-base  sm:tw-text-sm md:tw-text-base lg:tw-text-[15px] tw-font-bold">
              Ubicación:
            </p>
          </div>
          <div>
            <p
              class="tw-text-gray-500 tw-text-[12px] xl:tw-text-base  sm:tw-text-sm md:tw-text-base lg:tw-text-[15px] tw-capitalize tw-leading-3">
              Calle 72 u #26-17
            </p>
          </div>
        </div>
        <div class="tw-mt-8 tw-flex tw-justify-center">
          <a class="tw-rounded-xl tw-p-5 tw-text-center tw-font-bold tw-text-sm tw-text-black tw-cursor-pointer tw-tracking-wider
       lg:tw-text-[18px] 2xl:tw-text-[20px] sm:tw-text-[15px] tw-text-[13px]" style="background-color: #F4F4F4">
            <input id="link-radio" type="radio" value="">
            &nbsp; Activarme
            como trabajador / Independiente</a>
        </div>
      </div>
    </div>
    <div
      class="tw-my-8 tw-flex tw-justify-center lg:tw-mt-52 lg:tw-bg-[#F4F4F4] lg:tw-justify-end lg:tw-py-3 lg:tw-pr-10 lg:tw-rounded-xl">
      <a href="/DetailUser" class="tw-p-3 tw-font-bold tw-text-sm 
       lg:tw-text-[18px] 2xl:tw-text-[20px] sm:tw-text-[15px] tw-text-center tw-rounded-md tw-text-[13px] 
       tw-text-white tw-cursor-pointer tw-tracking-wider" style="background-color: #F6B21B">Editar perfil</a>
    </div>
  </div>
</template>

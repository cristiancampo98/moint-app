<script setup lang="ts">
</script>

<template>
    <div class="tw-w-full tw-h-auto tw-p-12" style="background-color: #F8F8F8;">
        <RouterLink to="/InfoUserView">
            <img src="volver.svg" alt="">
        </RouterLink>
        <div>
            <span class="tw-block tw-text-gray-500 tw-font-bold tw-text tw-my-2">Editar perfil</span>
            <span class="tw-text-gray-400 tw-font-normal">Seleccione la categoría que desea editar</span>
        </div>
    </div>
    <div class="tw-mx-10">
        <div class="tw-my-10">
            <span class="tw-block tw-text-gray-500 tw-font-bold tw-text tw-my-2">Foto de perfil</span>
            <span class="tw-text-gray-400 tw-font-normal tw-block">Recuerde subir imagenes JPG y</span>
            <span class="tw-text-gray-400 tw-font-normal tw-block">que no supere un peso de 1MB</span>
        </div>
        <div class="tw-flex tw-justify-start tw-mt-8">
            <img src=" photo.svg" alt="" class="tw-w-52 tw-rounded-lg">
        </div>
        <div class="tw-mt-5 tw-flex tw-justify-start">
            <a class="tw-p-3 tw-w-44 tw-text-center tw-font-bold tw-rounded-md tw-text-sm tw-text-white tw-cursor-pointer tw-tracking-wider"
                style="background-color: #F88E42">Actualizar foto</a>
        </div>
    </div>
    <div class=" tw-mt-10 tw-w-full tw-h-auto tw-py-2 tw-px-10 " style="background-color: #F8F8F8;">
        <span class="tw-block tw-text-gray-500 tw-font-bold tw-text tw-my-2">Datos personales</span>
    </div>
    <div class="tw-mx-10">
        <div class="tw-py-10">
            <form>
                <div class="">
                    <label for="type" class="tw-block tw-text-gray-500 tw-font-bold tw-text tw-mb-2">Tipo
                        de trabajador:</label>
                    <input type="text" id="type" class="tw-mb-2 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full 
                        tw-p-2.5">
                </div>
                <div class="">
                    <label for="type" class="tw-block tw-text-gray-500 tw-font-bold tw-text tw-mb-2">Nombre:</label>
                    <input type="text" id="type" class="tw-mb-2 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full 
                        tw-p-2.5">
                </div>
                <div class="">
                    <label for="type" class="tw-block tw-text-gray-500 tw-font-bold tw-text tw-mb-2">Apellido:</label>
                    <input type="text" id="type" class="tw-mb-2 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full 
                        tw-p-2.5">
                </div>
                <div class="">
                    <label for="type" class="tw-block tw-text-gray-500 tw-font-bold tw-text tw-mb-2">Cédula:</label>
                    <input type="text" id="type" class="tw-mb-2 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full 
                        tw-p-2.5">
                </div>
                <div class="">
                    <label for="type" class="tw-block tw-text-gray-500 tw-font-bold tw-text tw-mb-2">Fecha de
                        nacimiento:</label>
                    <input type="text" id="type" class="tw-mb-2 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full 
                        tw-p-2.5">
                </div>
                <div class="tw-my-8 tw-flex tw-justify-center">
                    <a href="/PersonalInformation" class=" tw-w-44 tw-p-3 tw-text-center tw-font-bold tw-rounded-md tw-text-sm tw-text-white tw-cursor-pointer tw-tracking-wider"
                        style="background-color: #F6B21B">Siguiente</a>
                </div>
            </form>

        </div>



    </div>

</template>

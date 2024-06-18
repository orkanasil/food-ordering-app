<template>
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50"
    >
      <div class="relative w-3/4 max-w-lg rounded-lg bg-white p-6 shadow-2xl">
        <div class="flex flex-col items-center">
          <OButton
            @click="closeModal()"
            class="self-end py-4 pr-4"
            variant="close"
          >
            <span class="material-symbols-outlined"> close </span>
          </OButton>
          <slot />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      closeModal() {
        this.$emit("close");
      },
    },
  };
  </script>
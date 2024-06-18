<template>
  <OModal>
    <h1 class="pb-3 font-semibold">{{ alt }}</h1>
    <img :src="src" :alt="alt" />
  </OModal>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>

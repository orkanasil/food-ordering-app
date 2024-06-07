<template>
  <div class="flex flex-col items-center">
    <OButton @click="closeModal()" class="self-end py-4 pr-4" variant="close"
      ><span class="material-symbols-outlined"> close </span></OButton
    >
    <h3 class="py-4 text-2xl font-bold">Payment Successful</h3>
    <p class="py-4">
      <span class="material-symbols-outlined text-9xl text-green-400">
        check_circle
      </span>
    </p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["resetBasket"]),
    closeModal() {
      this.$router.push({
        name: "Pizzas",
      });
      this.resetBasket();
    },
  },
};
</script>

<style scoped></style>

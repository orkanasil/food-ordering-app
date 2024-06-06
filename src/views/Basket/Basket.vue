<template>
  <div
    class="mx-auto mt-10 max-h-[48rem] w-3/4 overflow-y-auto rounded-lg bg-orange-100 shadow-2xl"
  >
    <ul>
      <li
        class="mx-auto my-4 flex w-3/4 rounded-2xl bg-white p-4 shadow-xl"
        v-for="item in basketList"
        :key="item.id"
      >
        <div class="flex w-16 items-center justify-center border-r-2">
          <p>{{ item.quantity }}x</p>
        </div>
        <div class="flex flex-col space-y-3 py-4 pl-4">
          <h3 class="font-semibold">{{ item.name }}</h3>
          <p class="text-balance">{{ item.description }}</p>
          <p>Price: {{ (item.quantity ?? 1) * item.price }}$</p>
        </div>
        <OButton @click="removePizza(item.id)" class="ml-auto" variant="delete">
          <span class="material-symbols-outlined">delete</span>
        </OButton>
      </li>
    </ul>
  </div>
  <div
    class="mx-auto mt-10 flex h-20 w-3/4 items-center rounded-lg pl-10 text-2xl shadow-2xl"
  >
    <p class="font-semibold">Total Price: {{ getTotalPrice }}$</p>
  </div>
  <div class="mx-auto my-10 flex h-16 w-3/4 justify-end text-xl">
    <OButton>Place Order</OButton>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["basketList", "getTotalPrice"]),
  },
  methods: {
    ...mapActions(["getTotalAmount", "deletePizza"]),
    removePizza(pizzaId) {
      this.deletePizza(pizzaId);
    },
  },
  created() {
    this.getTotalAmount();
  },
  updated() {
    console.log(this.basketList);
    if (this.basketList.length === 0) {
      this.$router.push({
        name: "Pizzas",
      });
    }
  },
};
</script>

<style scoped></style>

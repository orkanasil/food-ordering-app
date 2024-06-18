<template>
  <div>
    <div
      class="mx-auto mt-10 max-h-[48rem] w-3/4 overflow-y-auto rounded-lg bg-orange-100 shadow-2xl"
    >
      <ul>
        <li
          class="mx-auto my-4 flex w-3/4 items-center justify-between rounded-2xl bg-white p-4 shadow-xl"
          v-for="item in basketList"
          :key="item.id"
        >
          <div class="flex">
            <div class="flex w-16 items-center justify-center border-r-2">
              <p>{{ item.quantity }}x</p>
            </div>
            <div class="flex flex-col space-y-3 py-4 pl-4">
              <h3 class="font-semibold">{{ item.name }}</h3>
              <p class="text-balance">{{ item.description }}</p>
              <p>Price: {{ (item.quantity ?? 1) * item.price }}$</p>
            </div>
          </div>
          <div class="flex h-full items-center">
            <OButton
              @click="removePizza(item.id)"
              class="ml-auto h-fit"
              variant="delete"
            >
              <span class="material-symbols-outlined">delete</span>
            </OButton>
          </div>
        </li>
      </ul>
    </div>
    <div
      class="mx-auto mt-10 flex h-20 w-3/4 items-center rounded-lg pl-10 text-2xl shadow-2xl"
    >
      <p class="font-semibold">Total Price: {{ getTotalPrice }}$</p>
    </div>
    <div class="mx-auto my-10 flex h-16 w-3/4 justify-end text-xl">
      <OButton @click="openModal">Place Order</OButton>
    </div>
    <SuccessModal v-if="isSownModal" @close="closeModal" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SuccessModal from "./Success/SuccessModal.vue";
export default {
  components: {
    SuccessModal,
  },
  data() {
    return {
      isSownModal: false,
    };
  },
  computed: {
    ...mapGetters(["basketList", "getTotalPrice"]),
  },
  methods: {
    ...mapActions(["getTotalAmount", "deletePizza", "resetBasket"]),
    closeModal() {
      this.setModalAction(false);
      this.$router.push({
        name: "Pizzas",
      });
      this.resetBasket();
    },
    removePizza(pizzaId) {
      this.deletePizza(pizzaId);
    },
    openModal() {
      this.isSownModal = true;
    },
    closeModal() {
      this.isSownModal = false;
      this.$router.push({
        name: "Pizzas",
      });
      this.resetBasket();
    },
  },
  created() {
    this.getTotalAmount();
  },
  updated() {
    if (this.basketList.length === 0) {
      this.$router.push({
        name: "Pizzas",
      });
    }
  },
};
</script>

<style scoped></style>

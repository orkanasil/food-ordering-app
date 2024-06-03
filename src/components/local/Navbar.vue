<template>
  <div class="h-24 bg-orange-500 px-20">
    <div class="flex h-full items-center justify-between">
      <div @click="$router.push('/')" class="cursor-pointer text-2xl">
        Yummy Pizzas
      </div>
      <div
        class="grid grid-cols-1 grid-rows-1 justify-items-end gap-4 md:grid-cols-2"
      >
        <OButton @click="$router.push('/basket')" variant="link">
          Your Basket
          {{ getBasketCount ? `(${getBasketCount})` : "" }}
        </OButton>
        <div class="hidden items-center justify-end md:flex">
          <form @submit="searchPizzas(inputText)" class="flex">
            <input
              class="mr-2 rounded-lg px-10 py-2"
              type="text"
              placeholder="Search"
              v-model="inputText"
            />
            <OButton type="submit" variant="secondary" class="w-fit"
              >Search</OButton
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      inputText: "",
    };
  },
  computed: {
    ...mapGetters(["getBasketCount"]),
  },
  methods: {
    ...mapActions(["filterByName"]),
    searchPizzas() {
      this.filterByName(this.inputText);
      this.inputText = "";
    },
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div class="relative z-10" role="dialog" aria-modal="true">
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div
        class="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4"
      >
        <div
          class="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl"
        >
          <div
            class="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8"
          >
            <OButton
              type="button"
              variant="close"
              @click="closeDetail()"
              class="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
            >
              <span class="sr-only">Close</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </OButton>

            <div
              class="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8"
            >
              <div
                class="aspect-h-4 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5"
              >
                <img
                  :src="selectedPizza?.img"
                  alt="Pizza Photo"
                  class="object-cover object-center md:h-64"
                />
              </div>
              <div class="sm:col-span-8 lg:col-span-7">
                <h2 class="text-2xl font-bold text-gray-900 sm:pr-12">
                  {{ selectedPizza?.name }}
                </h2>
                <p class="my-4">
                  Price :
                  {{ (selectedPizza?.quantity ?? 1) * selectedPizza?.price }} $
                </p>
                <p class="my-4">
                  Description: {{ selectedPizza?.description }}
                </p>
                <div class="my-4 flex justify-start gap-2">
                  <OButton
                    variant="rounded"
                    @click.stop="decrement(selectedPizza?.id)"
                  >
                    <span class="material-symbols-outlined">remove</span>
                  </OButton>
                  <p>{{ selectedPizza?.quantity }}</p>
                  <OButton
                    variant="rounded"
                    @click.stop="increment(selectedPizza?.id)"
                  >
                    <span class="material-symbols-outlined">add</span>
                  </OButton>
                </div>

                <OButton
                  variant="primary"
                  @click="addToBasket(selectedPizza)"
                  class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent focus:outline-none focus:ring-2"
                >
                  Add to Basket
                </OButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  mounted() {
    // object destructing
    const { params } = this.$route;
    this.getPizzaById(params.id);
  },
  methods: {
    ...mapActions(["getPizzaById", "increment", "decrement", "addToBasket"]),
    closeDetail() {
      this.$router.push({
        name: "Pizzas",
      });
      this.$store.dispatch("resetFilter");
    },
  },
  computed: {
    ...mapGetters(["selectedPizza"]),
  },
};
</script>

<style scoped></style>

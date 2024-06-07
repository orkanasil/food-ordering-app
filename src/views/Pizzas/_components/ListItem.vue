<template>
  <div
    @click.stop="$emit('see-detail')"
    class="mb-3 flex h-fit w-full cursor-pointer flex-col-reverse items-center justify-between border-t-2 border-orange-200 px-12 py-6 text-center md:flex-row md:text-start"
  >
    <div class="flex flex-col space-y-4 md:pl-10">
      <h4 class="text-xl">{{ pizza.name }}</h4>
      <p>Description : {{ pizza.description }}</p>
      <div
        class="flex flex-col items-center gap-4 md:flex-row md:gap-12 xl:gap-36"
      >
        <div>Price: {{ (pizza.quantity ?? 1) * pizza.price }}$</div>
        <div class="flex justify-center gap-2">
          <OButton variant="rounded" @click.stop="$emit('decrement')">
            <span class="material-symbols-outlined">remove</span>
          </OButton>
          <p>{{ pizza.quantity }}</p>
          <OButton variant="rounded" @click.stop="$emit('increment')">
            <span class="material-symbols-outlined">add</span>
          </OButton>
        </div>
        <OButton @click.stop="$emit('addToBasket', pizza)">
          Add to Basket
          <span class="material-symbols-outlined">shopping_basket</span>
        </OButton>
      </div>
    </div>
    <img
      class="rounded-md border sm:h-48 sm:w-3/4 md:h-16 md:w-auto lg:h-24 xl:h-36"
      :src="pizza.img"
      alt="Pizza Pictures"
    />
  </div>
</template>

<script>
export default {
  props: ["pizza"],
};
</script>

<style scoped></style>

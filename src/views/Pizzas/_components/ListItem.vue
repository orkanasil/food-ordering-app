<template>
    <div @click.stop="$emit('see-detail')"
        class="flex flex-col-reverse md:flex-row items-center justify-between h-fit w-full px-12 py-6 border rounded-md cursor-pointer my-4">
        <div class="flex flex-col pl-10 justify-evenly">
            <h4 class="text-xl">{{ pizza.name }}</h4>
            <p>Description : {{ pizza.description }}</p>
            <div class="flex items-center flex-col gap-4 md:flex-row md:gap-36">
                <div>Price: {{ (pizza.quantity ?? 1) * pizza.price }}$</div>
                <div class="flex gap-2 justify-center">
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
        <img class="border rounded-md h-20 w-auto" :src="pizza.img" alt="Pizza Pictures" />
    </div>
</template>

<script>
export default {
    props: ['pizza'],
}
</script>

<style scoped></style>
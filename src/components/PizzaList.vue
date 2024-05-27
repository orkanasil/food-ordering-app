<template>
    <div class="card">
        <div class="flex flex-col pl-10 justify-evenly">
            <h4 class="text-xl">{{ pizza.name }}</h4>
            <p>Description : {{ pizza.description }}</p>
            <div class="flex gap-36 items-center">
                <p>Price: {{ pizza.price }}$</p>
                <div class="flex gap-2 justify-center">
                    <CustomButton class="icons"><span class="material-symbols-outlined">remove</span></CustomButton>
                    <p>{{ pizza.quantity }}</p>
                    <CustomButton class="icons" @click="$emit('increment', pizza.id)"><span
                            class="material-symbols-outlined">add</span></CustomButton>
                </div>
                <CustomButton class="add">Add to Cart <span class="material-symbols-outlined">shopping_basket</span>
                </CustomButton>
            </div>
        </div>
        <img class="image" :src="pizza.img" alt="Pizza Pictures">
    </div>
</template>

<script>
import CustomButton from "../components/ui-components/CustomButton.vue"
export default {
    props: ['pizza'],
    components: {
        CustomButton
    }
}
</script>

<style scoped></style>
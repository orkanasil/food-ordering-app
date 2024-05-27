<template>
    <div class=" h-24 bg-orange-500 flex items-center justify-center">
        <ul class="flex items-center gap-3 container text-lg">
            <li class="pr-20 text-2xl">Yummy Pizzas</li>
            <li class="pr-10">Home</li>
            <li>Your Cart</li>
            <div class="flex ml-auto items-center">
                <input class="mr-6 px-10 py-2 rounded-lg" type="text" placeholder="Search">
                <CustomButton class="add">Search</CustomButton>
            </div>

        </ul>
    </div>
</template>

<script>
import CustomButton from "../components/ui-components/CustomButton.vue"
export default {
    components: {
        CustomButton
    }
}
</script>

<style lang="scss" scoped></style>
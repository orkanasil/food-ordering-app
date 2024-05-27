<template>
    <div>
        <div class="pb-8">
            <h2>Meaty Pizzas</h2>
            <PizzaList class="shadow-2xl" v-for="pizza in meatyPizzas" :key="pizza.id" :pizza="pizza"
                @increment="increment(pizza.id)" />
        </div>
        <div class="pb-8">
            <h2>Vegetarian Pizzas</h2>
            <PizzaList class="shadow-2xl" v-for="pizza in vegetarianPizzas" :key="pizza.id" :pizza="pizza" />
        </div>
    </div>
</template>

<script>
import PizzaList from "../components/PizzaList.vue"
import { mapGetters, mapActions } from "vuex"
export default {
    components: {
        PizzaList
    },
    computed: {
        ...mapGetters(['pizzaList']),
        vegetarianPizzas() {
            return this.pizzaList.filter(pizza => pizza.veg)
        },
        meatyPizzas() {
            return this.pizzaList.filter(pizza => !pizza.veg)
        }
    },
    methods: {
        ...mapActions(['increment'])
    }

}
</script>

<style scoped>
h2 {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    background-color: #fb923c;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 6rem;
}
</style>
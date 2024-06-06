<template>
  <div v-for="(element, index) in pizzaTypes" :key="index">
    <template v-if="element.pizzas.length">
      <h2>{{ element.title }}</h2>
      <ListItem
        v-for="pizza in element.pizzas"
        :key="pizza.id"
        class="shadow-2xl"
        :pizza="pizza"
        @see-detail="seeDetail(pizza.id)"
        @increment="increment(pizza.id)"
        @decrement="decrement(pizza.id)"
        @add-to-basket="addToBasket($event)"
      />
    </template>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";
import PizzaDetail from "../../PizzaDetail/PizzaDetail.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    ListItem,
    PizzaDetail,
  },
  computed: {
    ...mapGetters(["pizzaList"]),
    vegetarianPizzas() {
      return this.pizzaList.filter((pizza) => pizza.veg);
    },
    meatyPizzas() {
      return this.pizzaList.filter((pizza) => !pizza.veg);
    },
    pizzaTypes() {
      return [
        {
          title: "Meaty Pizzas",
          pizzas: this.meatyPizzas,
        },
        {
          title: "Vegetarian Pizzas",
          pizzas: this.vegetarianPizzas,
        },
      ];
    },
  },
  methods: {
    ...mapActions(["increment", "decrement", "addToBasket"]),
    seeDetail(id) {
      this.$router.push({
        name: "pizza-detail",
        params: { id: id },
      });
    },
  },
};
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

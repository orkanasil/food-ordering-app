import axios from "axios";

export const pizzas = {
  state: {
    pizzas: [],
    selectedPizza: null,
    tempPizas: [],
    activeKey: "all",
  },
  getters: {
    pizzaList(state) {
      return state.pizzas;
    },
    selectedPizza(state) {
      return state.selectedPizza;
    },
    getActiveKey(state) {
      return state.activeKey;
    },
  },
  mutations: {
    setPizzas(state, pizzas) {
      state.pizzas = pizzas;
      state.tempPizas = pizzas;
    },
    increaseQuantity(state, pizzaId) {
      state.pizzas?.map((pizza) => {
        if (pizza.id === pizzaId) {
          pizza.quantity++;
        }
      });
    },
    decreaseQuantity(state, pizzaId) {
      state.pizzas?.map((pizza) => {
        if (pizza.id === pizzaId && pizza.quantity > 0) {
          pizza.quantity--;
        }
      });
    },
    setPizzaById(state, id) {
      state.selectedPizza = state.pizzas.find((p) => p.id === id);
    },
    filterPizzas(state, value) {
      state.pizzas = state.tempPizas;
      if (value === "all") {
        state.pizzas = state.tempPizas;
        state.activeKey = "all";
      } else if (value === "vegetarian") {
        state.pizzas = state.pizzas?.filter((pizza) => pizza.veg);
        state.activeKey = "vegetarian";
      } else {
        state.pizzas = state.pizzas?.filter((pizza) => !pizza.veg);
        state.activeKey = "meaty";
      }
    },
    filterByName(state, name) {
      state.pizzas = state.tempPizas;
      if (name.length > 0) {
        state.pizzas = state.pizzas?.filter(
          (pizza) => pizza.name.toLowerCase() === name.toLowerCase(),
        );
      }
    },
    resetPizzaFilter(state) {
      state.pizzas = state.tempPizas;
      state.activeKey = "all";
    },
  },
  actions: {
    loadPizzas({ commit }) {
      axios
        .get("pizzas")
        .then((response) => {
          commit("setPizzas", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    increment({ commit }, pizzaId) {
      commit("increaseQuantity", pizzaId);
    },
    decrement({ commit }, pizzaId) {
      commit("decreaseQuantity", pizzaId);
    },
    getPizzaById({ commit }, id) {
      commit("setPizzaById", id);
    },
    filterPizza({ commit }, value) {
      commit("filterPizzas", value);
    },
    filterByName({ commit }, name) {
      commit("filterByName", name);
    },
    resetFilter({ commit }) {
      commit("resetPizzaFilter");
    },
  },
};

import axios from "axios";

export const pizzas = {
  state: {
    pizzas: [],
    basketList: [],
    selectedPizza: null,
  },
  getters: {
    pizzaList(state) {
      return state.pizzas;
    },
  },
  mutations: {
    setPizzas(state, pizzas) {
      state.pizzas = pizzas;
    },
    increaseQuantity(state, pizzaId) {
      const pizza = state.pizzas.find((p) => p.id === pizzaId);
      if (pizza) {
        pizza.quantity++;
      }
    },
  },
  actions: {
    loadPizzas({ commit }) {
      axios
        .get("pizzas")
        .then((response) => {
          let pizzas = response.data;
          commit("setPizzas", pizzas);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    increment({ commit }, pizzaId) {
      commit("increaseQuantity", pizzaId);
    },
    decrement({ commit }) {
      commit("decreaseQuantity");
    },
  },
};

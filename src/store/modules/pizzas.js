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
    basketList(state) {
      return state.basketList;
    },
    selectedPizza(state) {
      return state.selectedPizza;
    },
    getBasketCount(state) {
      return state.basketList.length;
    },
  },
  mutations: {
    setPizzas(state, pizzas) {
      state.pizzas = pizzas;
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
    setBasketList(state, pizza) {
      const isExist = state.basket.find((p) => p.id === pizza.id);
      if (!isExist) {
        state.basketList.push(pizza);
      }
    },
    setPizzaById(state, id) {
      state.selectedPizza = state.pizzas.find((p) => p.id === id);
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
    addToBasket({ commit }, pizza) {
      commit("setBasketList", pizza);
    },
    getPizzaById([commit], id) {
      commit("setPizzaById", id);
    },
  },
};

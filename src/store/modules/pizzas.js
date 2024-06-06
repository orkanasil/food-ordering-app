import axios from "axios";

export const pizzas = {
  state: {
    pizzas: [],
    basketList: [],
    selectedPizza: [],
    tempPizas: [],
    totalPrice: 0,
    activeKey: "all",
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
    getActiveKey(state) {
      return state.activeKey;
    },
    getTotalPrice(state) {
      return state.totalPrice;
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
    setBasketList(state, pizza) {
      const isExist = state.basketList.find((p) => p.id === pizza.id);
      if (!isExist && pizza.quantity > 0) {
        state.basketList.push(pizza);
      }
    },
    deletePizzaFromBasket(state, pizzaId) {
      const pizzaToRemove = state.basketList.find(
        (pizza) => pizza.id === pizzaId,
      );
      if (pizzaToRemove) {
        state.totalPrice -= pizzaToRemove.price * pizzaToRemove.quantity;
        state.basketList = state.basketList.filter(
          (pizza) => pizza.id !== pizzaId,
        );
      }
    },
    setTotalPrice(state) {
      let total = 0;
      state.basketList.forEach((pizza) => {
        total += pizza.price * pizza.quantity;
      });
      state.totalPrice = total;
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
    addToBasket({ commit }, pizza) {
      commit("setBasketList", pizza);
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
    getTotalAmount({ commit }) {
      commit("setTotalPrice");
    },
    deletePizza({ commit }, pizzaId) {
      commit("deletePizzaFromBasket", pizzaId);
    },
  },
};

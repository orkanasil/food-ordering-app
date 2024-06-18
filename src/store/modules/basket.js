import axios from "axios";

export const basket = {
  state: {
    basketList: [],
    totalPrice: 0,
  },
  getters: {
    basketList(state) {
      return state.basketList;
    },
    getBasketCount(state) {
      return state.basketList.length;
    },
    getTotalPrice(state) {
      return state.totalPrice;
    },
  },
  mutations: {
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
    resetBasketList(state) {
      state.basketList = [];
    },
    setTotalPrice(state) {
      let total = 0;
      state.basketList.forEach((pizza) => {
        total += pizza.price * pizza.quantity;
      });
      state.totalPrice = total;
    },
  },
  actions: {
    addToBasket({ commit }, pizza) {
      commit("setBasketList", pizza);
    },
    getTotalAmount({ commit }) {
      commit("setTotalPrice");
    },
    deletePizza({ commit }, pizzaId) {
      commit("deletePizzaFromBasket", pizzaId);
    },
    resetBasket({ commit }) {
      commit("resetBasketList");
    },
  },
};

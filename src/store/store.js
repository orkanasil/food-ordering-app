import { createStore } from "vuex";
import { pizzas } from "./modules/pizzas";
import { basket } from "./modules/basket";

export default createStore({
  modules: [pizzas, basket],
});

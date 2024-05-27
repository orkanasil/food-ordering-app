import { createStore } from "vuex";
import { pizzas } from "./modules/pizzas";

export default createStore({
  modules: [pizzas],
});

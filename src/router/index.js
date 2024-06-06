import { createMemoryHistory, createRouter } from "vue-router";

import DefaultLayout from "../layouts/DefaultLayout.vue";
import Pizzas from "../views/Pizzas/Pizzas.vue";
import PizzaDetail from "../views/PizzaDetail/PizzaDetail.vue";
import Basket from "../views/Basket/Basket.vue";

const routes = [
  {
    path: "",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        alias: "",
        name: "Pizzas",
        component: Pizzas,
        meta: {
          showSidebar: true,
        },
      },
      {
        path: "/pizza/:id",
        name: "pizza-detail",
        component: PizzaDetail,
      },
      {
        path: "/basket",
        name: "Basket",
        component: Basket,
      },
    ],
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;

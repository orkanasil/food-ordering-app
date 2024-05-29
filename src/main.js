import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import store from "./store/store";
import "./plugins/axios";
import installGlobalComponents from "./plugins/globalComponents";
import router from "./router/index";

const app = createApp(App);

installGlobalComponents(app);

app.use(store);
app.use(router);
app.mount("#app");

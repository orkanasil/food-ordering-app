import OButton from "../components/ui/Button.vue";
import OModal from "../components/ui/Modal.vue";

export default function intallGlobalComponents(app) {
  app.component("OButton", OButton);
  app.component("OModal", OModal);
}

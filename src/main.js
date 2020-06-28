import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import iview from "view-design";
import "view-design/dist/styles/iview.css";
import global from "@/components/Global.js";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";

Vue.config.productionTip = false;
Vue.prototype.GLOBAL = global;
Vue.use(iview);
Vue.use(mavonEditor);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

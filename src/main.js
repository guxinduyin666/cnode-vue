import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import composition from "@vue/composition-api";

import "../static/reset.less";

Vue.config.productionTip = false;
Vue.use(composition);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

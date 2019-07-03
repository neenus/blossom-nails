import Vue from "vue";
import "@plugins/vuetify";
import App from "@src/App.vue";
import router from "@src/router";
import store from "@src/store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

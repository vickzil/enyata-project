import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import myMixin from "./mixins";

Vue.config.productionTip = false;
Vue.mixin(myMixin);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

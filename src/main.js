import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;
//必写
//代表发送端发送的实体数据的数据类型
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.baseURL = process.env.VUE_APP_BASE_API;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

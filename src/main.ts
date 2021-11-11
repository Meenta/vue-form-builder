/**
 * NOTE - This file only exists for development purpose.
 * It will help me to run and test the form
 */

import Vue from "vue";
import Fragment from 'vue-fragment'
import App from "./App.vue";
// @ts-ignore
import { VueFormBuilderPlugin } from "@/index";

Vue.config.productionTip = false;

Vue.use(VueFormBuilderPlugin, {
  fieldMatchingApi:
    "https://us-central1-covid-4e0ce.cloudfunctions.net/public/api/schemas/all/true"
});
//Vue fragment for rootless components
Vue.use(Fragment.Plugin);

new Vue({
  render: (h) => h(App)
}).$mount("#app");

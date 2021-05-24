import Vue from "vue";  // These modules are under `{projectRoot}/node_modules` directory. They are installed by npm.
import App from "./App";  // `App` is the conventional entry component of Vue applications.

import router from "./router";  // Automatically scan for configs in the `router` directory
import Element from "element-ui"; // Imported modules often start with Cap
import "element-ui/lib/theme-chalk/index.css";  // Needed by Element-UI

Vue.config.productionTip = false

Vue.use(Element)

// Instantiating a Vue instance. One Vue app should have only one Vue instance.
// Vue instance will contain many meta information of our application.
// It is also the root of our app's component tree. Refer to `LEARN.md`
// for more details.
new Vue({
  // The `router` object contains the `URL` mapping of all the Vue components we are going to use.
  router: router,

  render: h => h(App), // Needed by Element-UI

  // Add the `App` component to our Vue instance so that this component can be used to create a template for
  // our Vue instance.
  components: {App},

  // Templates define how components are displayed.
  template: "<App/>"

// Mount the Vue instance as a component at the `#app` element.
// It is equivalent to using the `el` option at instantiation.
}).$mount("#app");


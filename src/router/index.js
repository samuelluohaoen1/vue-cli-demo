// It is by convention that the root configuration file named as "index.js"

import Vue from "vue";
import VueRouter from "vue-router";

import Main from "../views/Main";
import Login from "../views/Login"

// Tell Vue that `VueRouter` plugin is going to be used
// This has to be done before the app is started
Vue.use(VueRouter);

// Using export default to expose `VueRouter`'s interfaces
export default new VueRouter({
  routes: [
    {
      // Map the component `Content` to the URL "{domain}/content"
      path: "/login",
      component: Login
    },
    {
      path: "/main",
      component: Main
    }
  ]
});

// It is by convention that the root configuration file named as "index.js"

import Vue from "vue";
import VueRouter from "vue-router";

// Import all components used by our router.
import Main from "../views/Main";
import Login from "../views/Login"
import UserManagement from "../views/UserManagement";
import UserList from "../views/users/UserList";
import UserProfile from "../views/users/UserProfile";
import NotFound from "../views/NotFound";


// Tell Vue that `VueRouter` plugin is going to be used
// This has to be done before the app is started
Vue.use(VueRouter);

// Using export default to expose `VueRouter`'s interfaces
export default new VueRouter({
  mode: "history",
  routes: [
    {
      // Map the component `Main` to the URL "{domain}/main"
      path: "/main",
      component: Main,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      // If people access the root simply redirect to main
      path: "/",
      redirect: "/main"
    },
    {
      // By enabling `props` we can pass parameters to pages in RESTful style.
      // Here `:username` is the prop name in `UserManagement.vue`
      path: "/user-management/:username",
      component: UserManagement,
      props: true,
      children: [
        {
          // props of parent path are not preserved in child paths.
          // So we still need to pass props so that we do not lose
          // `username`. This shall be resolved by using cookies
          // or server side support.
          path: "/user-management/user-list/:username",
          name: "UserList",
          component: UserList,
          props: true

        },
        {
          path: "/user-management/user-profile/:username",
          name: "UserProfile",
          component: UserProfile,
          props: true
        }
      ]
    },
    {
      // Route all unmapped path to 404 Not Found page
      path: "*",
      name: "NotFound",
      component: NotFound
    }

  ]
});

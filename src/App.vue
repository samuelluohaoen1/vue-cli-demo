<template>
  <div id="app">


    <!-- Use `<router-link>` tag to add a `<a href="">` like hyperlink for get requests -->
    <!-- "/main" is mapped to the component `Main` which is stored under "./components/Main.vue"-->
    <router-link to="/main">Main Page</router-link>
    |
    <!-- "/login" is mapped to the component `Login` which is stored under "./components/Login.vue"-->
    <router-link to="/login">Login</router-link>

    <!-- Components returned by the route requests are displayed in `<router-view>`-->
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<!--
Since `App.vue` is the entry component, sometimes it makes sense to define its
style as global. However, usually the styling of components are scoped like this:
`<style scoped>`
-->
<style>

</style>

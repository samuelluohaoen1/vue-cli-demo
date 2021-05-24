<template>
  <h1>Your profile:</h1>
</template>

<script>
export default {
  name: "UserProfile",

  // A hook that executes before route enters (before the page is loaded).
  beforeRouteEnter:(to, from, next) => {
    // These hook methods are very similar to Java filters and Spring Interceptors.
    // If we do not call `next()`, the computation is stuck.
    // There are many ways of calling `next()`, each of them result in different behaviors.
    // Calling `next()` like this allow us to use our application's `Vue` instance.
    next(vm => {
      vm.getData();
    });
  },

  // A hook that executes after route leaves (after we leave the current page).
  beforeRouteLeave:(to, from, next) => {
    next();
  },
  methods: {
    // `getData()` is called in the `beforeRouteEnter` hook.
    getData: function () {
      // Using `axios.get()` to asynchronously get data from the given url.
      this.axios({
        method: "get",
        url: "http://localhost:8080/static/mock/data.json"
      }).then(function (response) {  // After the response comes back, do something with it.
        console.log(response);
      })
      // Note that we can achieve communication with server using the above methodology.
      // We can delay the rendering of related information until after the data comes back
      // from the server. Doing this asynchronously prevents our UI from not responding.
    }
  }
}
</script>

<style scoped>

</style>

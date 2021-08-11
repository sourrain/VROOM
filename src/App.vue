<template>
  <div id="app">
    <navigation />
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    Navigation,
  },
};
</script>

<style>
</style>

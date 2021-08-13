<template>
  <div id="app" class="flex-col justify-items-stretch">
    <navigation />
    <router-view class="min-h-screen mt-5 md:mt-40"></router-view>
    <footerInfo />
  </div>
</template>

<script>
import Navigation from "./components/Nav.vue";
import FooterInfo from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navigation,
    FooterInfo,
  },
};
</script>

<style>
</style>

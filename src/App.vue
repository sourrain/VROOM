<template>
  <div id="app" class="flex-col justify-items-stretch">
    <meta
      name="facebook-domain-verification"
      content="pp4pbn29valwbhnq2hsno03l28jgkn"
    />
    <Navigation v-if="!navigation" />
    <router-view class="min-h-screen mt-5 md:mt-40"></router-view>
    <FooterInfo v-if="!navigation" />
  </div>
</template>

<script>
import Navigation from "./components/Nav.vue";
import FooterInfo from "./components/Footer.vue";
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "App",
  components: {
    Navigation,
    FooterInfo,
  },
  data() {
    return {
      navigation: null,
    };
  },
  created() {
    this.checkRoute();
    console.log(firebase.auth().currentUser.uid);
  },
  methods: {
    checkRoute() {
      if (
        this.$route.name === "Login" ||
        this.$route.name === "Register" ||
        this.$route.name === "ForgotPassword"
      ) {
        this.navigation = true;
        return;
      }
      this.navigation = false;
    },
  },
  watch: {
    $route() {
      this.checkRoute();
    },
  },
};
</script>

<style>
</style>

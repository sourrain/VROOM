<template>
  <div>
    <div class="flex flex-wrap justify-center">
      <div
        class="
          border-8
          p-4
          rounded-2xl
          border-black
          lg:w-1/2
          w-screen
          m-2
          flex flex-col
          items-center
          text-center
        "
      >
        <div class="p-6">
          Don't have an account?
          <router-link class="border-b-2 border-black" to="/Register"
            >Register</router-link
          >
        </div>
        <div class="lg:text-6xl text-3xl">Login to VROOM</div>
        <div class="pt-8">
          <input
            class="bg-purple-300 p-2 m-2 placeholder-white"
            type="text"
            placeholder="EMAIL"
            v-model="email"
          />
        </div>
        <div>
          <input
            class="bg-purple-300 p-2 m-2 placeholder-white"
            type="text"
            placeholder="PASSWORD"
            v-model="password"
          />
        </div>
        <div
          v-show="error"
          class="text-red-500 text-xs border-b-2 border-red-500"
        >
          {{ this.errorMsg }}
        </div>
        <div class="m-2 py-2 px-6 bg-black text-white rounded-2xl">
          <div @click.prevent="login" to="">SIGN IN</div>
        </div>
        <div class="m-2 py-2 px-4">
          <router-link to="/ForgotPassword">Forgot your password?</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "Login",

  data() {
    return {
      email: null,
      password: null,
      error: null,
      errorMsg: "",
    };
  },
  create() {
    console.log(firebase.auth().currentUser.uid);
  },
  methods: {
    async login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push({ name: "Home" });
          this.error = false;
          this.errorMsg = "";
        })
        .catch((err) => {
          this.error = true;
          this.errorMsg = err.message;
        });
    },
  },
};
</script>

<style>
</style>
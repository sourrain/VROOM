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
          Already have an account?
          <router-link class="border-b-2 border-black" to="/Login"
            >Login</router-link
          >
        </div>

        <div class="lg:text-5xl text-3xl">Create Your VROOM Account</div>

        <div class="pt-8">
          <input
            class="bg-purple-300 p-2 m-2 placeholder-white"
            type="text"
            placeholder="USERNAME"
            v-model="username"
          />
        </div>
        <div>
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
        <div @click.prevent="fbRegister">Log in by FB</div>
        <div class="p-4">
          <div
            @click.prevent="register"
            class="m-2 py-2 px-6 bg-black text-white rounded-2xl"
            to=""
          >
            SIGNUP
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseinit";

export default {
  name: "Register",
  //Data to create account in Firebase
  //Data to Login component for sign in to Firebase Auth
  data() {
    return {
      username: null,
      email: null,
      password: null,
      error: null,
      errorMsg: "",
    };
  },
  methods: {
    async register() {
      if (
        this.username !== null &&
        this.email !== null &&
        this.password !== null
      ) {
        const firebaseAuth = await firebase.auth();
        const createUser = await firebaseAuth
          .createUserWithEmailAndPassword(this.email, this.password)
          .catch((err) => {
            this.error = true;
            this.errorMsg = err.message;
          });
        const dataBase = db.collection("users").doc(createUser.user.uid);

        await dataBase.set({
          username: this.username,
          email: this.email,
          password: this.password,
        });
        this.$router.push({ name: "Home" });
        return;
      } else {
        this.error = true;
        this.errorMsg = "Please fill out all the fields.";

        return;
      }
    },
    async fbRegister() {
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    },
  },
};
</script>


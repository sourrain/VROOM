<template>
  <div class="flex justify-center items-center w-screen h-screen z-0">
    <Modal
      :modalMessage="modalMessage"
      v-if="modalActive"
      v-on:close-modal="closeModal"
      class="z-auto"
    />
    <div class="flex justify-center">
      <div
        class="
          border-8
          p-4
          rounded-2xl
          border-black
          flex flex-col
          items-center
          text-center
        "
      >
        <div>
          Back to
          <router-link class="border-b-2 border-black" to="Login"
            >Log in</router-link
          >
        </div>
        <div class="text-6xl p-4">Reset Password</div>
        <div>Forgot your passowrd? Enter your email to reset it</div>
        <div class="pt-8">
          <input
            class="bg-purple-300 p-2 m-2 placeholder-white"
            type="text"
            placeholder="EMAIL"
            v-model="email"
          />
        </div>

        <div class="p-4">
          <div
            class="m-2 py-2 px-6 bg-black text-white rounded-2xl"
            to=""
            @click="resetPassword"
          >
            RESET
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import Modal from "../components/Modal";

export default {
  name: "ForgotPassword",
  components: {
    Modal,
  },
  data() {
    return {
      email: null,
      modalActive: false,
      modalMessage: "",
    };
  },
  methods: {
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = "";
    },
    resetPassword() {
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.modalMessage =
            "If your account exists, you will recieve a email";
          this.modalActive = true;
        })
        .catch((err) => {
          this.modalMessage = err.message;
          this.modalActive = true;
        });
    },
  },
};
</script>


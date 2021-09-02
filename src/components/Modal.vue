<template>
  <div class="flex justify-center items-center w-screen h-screen">
    <div class="bg-black text-white w-56 h-auto rounded-xl p-3 flex flex-col">
      <p>{{ this.modalMessage }}</p>
      <button
        @click="closeModal"
        class="border-2 border-white w-1/4 rounded-md text-xs p-1"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["modalMessage"],
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>

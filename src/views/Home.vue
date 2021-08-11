<template>
  <div id="app">
    <div class="mt-40 w-1/2 mx-auto max-w-7xl px-4">
      <div class="text-left">
        <h1 class="text-6xl tracking-tight font-extrabold">
          A magical notebook, a portal to immersion world.
        </h1>
        <p class="mt-3">
          VROOM welcome any creative souls to document their ideas, together in
          real-time. 🎉
        </p>
        <div class="mt-5">
          <button class="px-6 py-3 rounded-xl bg-black text-white">
            Get Started
          </button>
          <button
            class="
              px-6
              py-2
              rounded-xl
              bg-white
              text-black
              border-black border-collapse border-4
            "
          >
            Sponsor
          </button>
        </div>
      </div>
      <defaultEditor class="w-30 h-60 mt-10 border-4 border-black rounded-xl" />
    </div>
  </div>
</template>

<script>
import DefaultEditor from "../components/DefaultEditor.vue";

export default {
  name: "App",
  components: {
    DefaultEditor,
  },
};
</script>

<style>
</style>

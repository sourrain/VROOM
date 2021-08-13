<template>
  <div>
    <nav
      class="
        w-full
        h-16
        pt-6
        pb-6
        fixed
        top-0
        flex
        items-center
        justify-evenly
        bg-white bg-opacity-90
        blur-xl
        text-base
      "
    >
      <router-link to="/">
        <img
          class="h-18 p-4 w-auto mt-16"
          alt="logo"
          src="@/assets/logovroom.svg"
        />
      </router-link>
      <div
        class="
          w-32
          px-2
          py-0.5
          rounded-md
          bg-white
          text-xs text-black
          border-black border-collapse border-2
          tracking-tight
          font-extrabold
        "
      >
        1.0 PROTOTYPE
      </div>
      <nav class="w-3/5 p-4 flex items-center justify-evenly">
        <router-link to="/pricing">Pricing</router-link>
        <router-link to="/community">Community</router-link>
        <router-link to="/theatre">Theatre</router-link>
        <router-link to="/company">Company</router-link>
      </nav>

      <div class="w-1/4 p-4 flex items-center justify-evenly">
        <div
          class="
            px-3.5
            py-0.5
            rounded-xl
            bg-white
            text-black
            border-black border-collapse border-2
          "
        >
          Log in
        </div>
        <div class="px-3.5 py-1.5 rounded-xl bg-black text-white">Sign up</div>
      </div>
    </nav>
  </div>
</template>

<script>
</script>

<style>
</style>
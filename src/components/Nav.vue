<template>
  <div>
    <header
      class="
        flex flex-wrap
        items-center
        bg-white bg-opacity-90
        blur-lg
        text-base
        justify-between
        md:fixed
        md:top-0
        md:w-full
      "
    >
      <div class="flex items-center">
        <router-link to="/">
          <img
            class="md:h-24 p-2 h-16 w-auto mt-0"
            alt="logo"
            src="@/assets/logovroom.svg"
          />
        </router-link>
        <div
          class="
            lg:px-1
            lg:py-0.5
            p-0.5
            rounded-md
            bg-black
            text-white
            tracking-tighter
            text-xs
            md:font-bold
          "
        >
          1.0 BETA
        </div>
      </div>

      <label for="menu-toggle" class="lg:hidden mr-2 cursor-pointer block">
        <i class="ri-menu-3-fill ri-2x"></i>
      </label>
      <input type="checkbox" class="hidden" id="menu-toggle" />

      <div
        class="hidden lg:flex lg:w-5/6 w-screen lg:justify-between uppercase"
        id="menu"
      >
        <ul class="lg:flex-wrap lg:flex items-center">
          <li>
            <router-link class="md:p-4 py-3 px-0 block" to="/pricing"
              >Pricing</router-link
            >
          </li>
          <li>
            <router-link class="md:p-4 py-3 px-0 block" to="/notebooks"
              >Notebooks</router-link
            >
          </li>
          <li>
            <router-link class="md:p-4 py-3 px-0 block" to="/community"
              >Community</router-link
            >
          </li>
          <li>
            <router-link class="md:p-4 py-3 px-0 block" to="/theatre"
              >Theatre</router-link
            >
          </li>
          <li>
            <router-link class="md:p-4 py-3 px-0 block" to="/company"
              >Company</router-link
            >
          </li>

          <li class="lg:ml-40 lg:m-6">
            <router-link
              to="/login"
              class="
                px-2.5
                py-0.5
                block
                lg:rounded-lg
                lg:bg-white
                text-white
                bg-black
                lg:text-black
                lg:border-black lg:border-4
              "
            >
              Log in
            </router-link>
          </li>
          <li>
            <router-link
              to="/Register"
              class="
                px-2.5
                py-1.5
                lg:m-1
                lg:rounded-lg
                bg-black
                text-white
                block
              "
            >
              Sign up
            </router-link>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
</script>

<style>
#menu-toggle:checked + #menu {
  display: block;
}
</style>
<template>
  <div>
    <header
      class="
        flex flex-wrap
        items-center
        bg-white bg-opacity-90
        blur-xl
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
            md:w-32
            w-22
            md:px-2
            md:py-0.5
            rounded-md
            bg-white
            text-black
            border-black border-collapse
            md:border-2
            md:tracking-tight
            md:font-extrabold
            font-medium
            text-xs
            tracking-tighter
          "
        >
          1.0 PROTOTYPE
        </div>
      </div>

      <label for="menu-toggle" class="md:hidden mr-2 cursor-pointer block">
        <i class="ri-menu-3-fill ri-2x"></i>
      </label>
      <input type="checkbox" class="hidden" id="menu-toggle" />

      <div
        class="hidden md:flex md:w-1/2 w-screen md:justify-between uppercase"
        id="menu"
      >
        <nav>
          <ul
            class="
              md:flex-wrap md:flex
              md:justify-between
              justify-center
              text-base
              pl-20
              items-center
            "
          >
            <li>
              <router-link class="md:p-4 py-3 px-0 block" to="/pricing"
                >Pricing</router-link
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
          </ul>
        </nav>
      </div>

      <div
        class="w-1/4 p-4 items-center md:flex justify-evenly md:visible hidden"
      >
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
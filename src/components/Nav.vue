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
      <!--Mobile menu, show/hide based on menu open state.-->
      <div
        class="
          absolute
          top-0
          inset-x-0
          p-2
          transition
          transform
          origin-top-right
          md:hidden
        "
      >
        <div
          class="
            rounded-lg
            shadow-md
            bg-white
            ring-1 ring-black ring-opacity-5
            overflow-hidden
          "
        >
          <div class="px-5 pt-4 flex items-center justify-between">
            <div class="-mr-2">
              <button
                type="button"
                class="
                  bg-white
                  rounded-md
                  p-2
                  inline-flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:text-gray-500
                  hover:bg-gray-100
                  focus:outline-none
                  focus:ring-2 focus:ring-inset focus:ring-indigo-500
                "
              >
                <span class="sr-only">Close main menu</span>
                <!-- Heroicon name: outline/x -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              class="
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
                text-gray-700
                hover:text-gray-900
                hover:bg-gray-50
              "
              >Product</a
            >

            <a
              href="#"
              class="
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
                text-gray-700
                hover:text-gray-900
                hover:bg-gray-50
              "
              >Features</a
            >

            <a
              href="#"
              class="
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
                text-gray-700
                hover:text-gray-900
                hover:bg-gray-50
              "
              >Marketplace</a
            >

            <a
              href="#"
              class="
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
                text-gray-700
                hover:text-gray-900
                hover:bg-gray-50
              "
              >Company</a
            >
          </div>
          <a
            href="#"
            class="
              block
              w-full
              px-5
              py-3
              text-center
              font-medium
              text-indigo-600
              bg-gray-50
              hover:bg-gray-100
            "
          >
            Log in
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
</script>

<style>
</style>
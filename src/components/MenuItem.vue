<template>
  <button
    class="svg-black bg-red-300"
    :class="{ 'is-active': isActive ? isActive() : null }"
    @click="action"
    :title="title"
  >
    <svg
      class="h-6 w-auto text-black fill-current"
      fill="currentColor"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <use
        :xlink:href="
          require('remixicon/fonts/remixicon.symbol.svg') + `#ri-${icon}`
        "
      />
    </svg>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    action: {
      type: Function,
      required: true,
    },

    isActive: {
      type: Function,
      default: null,
    },
  },
};
</script>

<style>
</style>
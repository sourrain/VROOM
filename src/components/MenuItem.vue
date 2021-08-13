<template>
  <button
    class="svg-black"
    :class="{ 'is-active': isActive ? isActive() : null }"
    @click="action"
    :title="title"
  >
    <svg class="h-5 w-auto" fill="currentColor" viewBox="0 0 24 24">
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
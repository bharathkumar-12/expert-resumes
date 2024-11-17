<template>
   <div class="mt-8 flex flex-wrap gap-4">
    <nuxt-link
      :to="link"
      class="block w-full rounded-lg border border-blue-600 bg-gradient-to-r from-blue-500 to-blue-700 px-12 py-3 text-sm font-semibold text-white hover:text-gray-200 shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-transparent hover:text-blue-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-95 sm:w-auto"
    >
      <slot />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>

<template>
  <nuxt-link :to="localePath('/')" class="logo">
    <img
      :src="imageUrl"
      :width="width"
      :height="height"
      :alt="alt">
  </nuxt-link>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    imageUrl: {
      type: String,
      required: false,
      default: require('~/assets/images/header/Logo.svg')
    },
    width: {
      type: String,
      required: false
    },
    height: {
      type: String,
      required: false
    },
    alt: {
      type: String,
      required: false
    },
  }
}
</script>

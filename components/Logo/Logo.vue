<template>
  <a href="/" class="logo">
    <img
      :src="imagePath"
      :width="width"
      :height="height"
      :alt="alt">
  </a>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    imagePath: {
      type: String,
      required: true,
      default: '/images/header/Logo.svg'
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

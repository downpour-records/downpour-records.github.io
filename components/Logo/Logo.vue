<script>
export default {
  name: 'Logo',
  props: {
    imagePath: String
  }
}
</script>

<template>
  <a href="/" class="logo">
    <nuxt-img
      :src="imagePath"
      width="166" height="48"
      alt="Downpour records logo"/>
  </a>
</template>

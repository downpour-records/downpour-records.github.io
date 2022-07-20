<template>
  <section class="hero" ref="hero">
    <picture>
      <source data-srcset="~/assets/images/hero/hero_bg.jpg?webp" type="image/webp">
      <source data-srcset="~/assets/images/hero/hero_bg.jpg" type="image/jpg">
      <img data-src="~/assets/images/hero/hero_bg.jpg" class="hero__bg lazyload" alt="Hero image">
    </picture>
    <div class="container flex items-center flex-col justify-center h-full relative z-10">
      <h1 class="text-7xl text-white font-medium mb-5">Downpour records</h1>
      <p class="text-lightgrey text-2xl font-medium">Let the world hear you</p>
    </div>
  </section>
</template>

<style lang="scss">
.hero {
  overflow: hidden;
  width: 100%;
  height: 100vh;

  @apply bg-secondary;
  @apply relative;

  &__bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;

    @apply absolute;
    @apply top-0;
    @apply left-0;
  }
}
</style>

<script>
// import "@/components/Hero/Hero.scss"

export default {
  name: 'Hero',

  mounted() {
    this.$nextTick(() => {
      this.onResize()
      window.addEventListener('resize', this.onResize)
    })
  },

  methods: {
    onResize() {
      let viewportHeight = window.innerHeight
      this.$refs.hero.style.height = viewportHeight + 'px'
    }
  }
}
</script>

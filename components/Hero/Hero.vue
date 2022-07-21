<template>
  <section class="hero" ref="hero" id="hero">
    <picture v-if="show">
      <source srcset="~/assets/images/hero/hero_bg.jpg?webp" type="image/webp">
      <source srcset="~/assets/images/hero/hero_bg.jpg" type="image/jpg">
      <img src="~/assets/images/hero/hero_bg.jpg" class="hero__bg" alt="Hero image">
    </picture>
    <div class="container flex items-center flex-col justify-center h-full relative z-10">
      <h1 class="text-center md:text-7xl text-5xl text-white font-medium md:mb-5 mb-2">{{ $t('hero.title') }}</h1>
      <p class="text-center text-lightgrey md:text-2xl text-xl font-medium">{{ $t('hero.slogan') }}</p>
    </div>
  </section>
</template>

<script>
import "@/components/Hero/Hero.scss"

export default {
  name: 'Hero',

  data() {
    return {
      show: false
    }
  },

  methods: {
    onResize() {
      let viewportHeight = window.innerHeight
      this.$refs.hero.style.height = viewportHeight + 'px'
    }
  },

  mounted() {
    /*this.$nextTick(() => {
      this.onResize()
      window.addEventListener('resize', this.onResize)
    })*/
    this.onResize()
    window.addEventListener('resize', this.onResize)
    this.show = true
  }

}
</script>

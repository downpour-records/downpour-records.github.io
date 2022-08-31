<template>
  <section class="hero overflow-hidden w-full h-screen bg-secondary relative" ref="hero" id="hero">
    <picture v-if="show">
      <source data-srcset="~/assets/images/hero/hero_bg.jpg?webp" type="image/webp">
      <source data-srcset="~/assets/images/hero/hero_bg.jpg" type="image/jpg">
      <img data-src="~/assets/images/hero/hero_bg.jpg" class="hero__bg lazyload" alt="Hero image">
    </picture>
    <div class="container flex items-center flex-col justify-center h-full relative z-10">
      <h1 class="text-center md:text-7xl text-5xl text-white font-medium md:mb-5 mb-2">{{ $t('hero.title') }}</h1>
      <p class="text-center text-lightgrey md:text-2xl text-xl font-medium">{{ $t('hero.slogan') }}</p>
      <a href="#"
         v-scroll-to="{
            el: '#releases',
            easing: 'linear',
            duration: 500,
            offset: -70,
         }"
         class="lazyload hero__arrow">
        <img data-src="~/assets/images/arrow-down-icon-hero.svg" class="lazyload" alt="" width="60" height="60">
      </a>
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
    this.$nextTick(() => {
      this.onResize()
      window.addEventListener('resize', this.onResize)
    })
    // this.onResize()
    // window.addEventListener('resize', this.onResize)
    this.show = true
  }

}
</script>

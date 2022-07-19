<template>
  <section class="hero">
<!--    <img data-src="~/assets/images/hero/hero_bg?webp" alt="Hero image" class="hero__bg lazyload">-->

    <picture>
      <source data-srcset="~/assets/images/hero/hero_bg.jpg?webp" type="image/webp">
      <source data-srcset="~/assets/images/hero/hero_bg.jpg" type="image/jpg">
      <img data-src="~/assets/images/hero/hero_bg.jpg" class="hero__bg lazyload" alt="Hero image">
    </picture>

    <div class="container"></div>
  </section>
</template>

<script>
import "@/components/Hero/Hero.scss"

export default {
  name: 'Hero'
}
</script>

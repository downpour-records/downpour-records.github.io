<template>
  <nav class="main-nav">
    <ul class="main-nav__list list-none p-0 m-0 flex items-center">
      <li class="main-nav__item">
        <a href="#"
           class="main-nav__link"
           v-scroll-to="'#hero'">{{ $t('nav.home') }}</a>
      </li>
      <li class="main-nav__item">
        <a href="#"
           class="main-nav__link"
           v-scroll-to="'#releases'">{{ $t('nav.releases') }}</a>
      </li>
      <li class="main-nav__item">
        <a href="#"
           class="main-nav__link"
           v-scroll-to="'#services'">{{ $t('nav.services') }}</a>
      </li>
      <li class="main-nav__item">
        <a href="#"
           class="main-nav__link"
           v-scroll-to="'#contacts'">{{ $t('nav.contacts') }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import "@/components/Nav/Nav.scss"

var VueScrollTo = require('vue-scrollto');

var options = {
  easing: 'linear',
  duration: 600,
  offset: -70,
}

export default {
  name: 'Nav'
}
</script>

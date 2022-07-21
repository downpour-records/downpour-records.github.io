<template>
  <nav class="main-nav">
    <ul class="main-nav__list list-none p-0 m-0 flex md:items-center flex-col md:flex-row">
      <li class="main-nav__item">
        <a href="#"
           class="main-nav__link"
           v-scroll-to="{
            el: '#hero',
            ...options
        }">{{ $t('nav.home') }}</a>
      </li>
      <li class="main-nav__item">
        <a href="#"
           class="main-nav__link"
           v-scroll-to="{
            el: '#releases',
            ...options
        }">{{ $t('nav.releases') }}</a>
      </li>
      <li class="main-nav__item">
        <a href="#"
           class="main-nav__link"
           v-scroll-to="{
            el: '#services',
            ...options
        }">{{ $t('nav.services') }}</a>
      </li>
      <li class="main-nav__item">
        <a href="#"
           class="main-nav__link"
           v-scroll-to="{
            el: '#contacts',
            ...options
        }">{{ $t('nav.contacts') }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import "@/components/Nav/Nav.scss"

/*import Vue from 'vue';
var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo, {
  easing: 'linear',
  duration: 500,
  offset: -70,
  onStart: function(element) {
    this.asideHide(element)
  },
})*/

export default {
  name: 'Nav',
  data() {
    return {
      options: {
        easing: 'linear',
        duration: 500,
        offset: -70,
        onStart: this.asideHide,
      },
    }
  },
  methods: {
    asideHide(element) {
      this.$emit('asideHide')
      // console.log('popup', this.popupShow)
      // console.log(element)
    }
  }
}
</script>

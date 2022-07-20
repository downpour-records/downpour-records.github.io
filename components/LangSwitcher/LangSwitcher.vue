<template>
  <div class="lang-switcher inline-flex items-center justify-center w-105px h-12 relative text-left">
    <div
      class="flex items-center justify-center cursor-pointer h-full"
      @click="toggle = !toggle"
      v-click-outside="hide">
      <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" stroke="#ffffff"></path></svg>
      <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4"><g transform="rotate(90 12 12)"><path d="M9 5l7 7-7 7" stroke="#ffffff"></path></g></svg>
    </div>

    <Transition>
      <ul
        ref="popupItem"
        v-if="toggle"
        class="lang-switcher__list list-none absolute top-12 left-0 w-105px px-0 py-2 bg-darkgreen shadow-md flex flex-col items-center rounded-md">
<!--        <li class="lang-switcher__item w-full text-center">
          <a href="#" class="lang-switcher__link my-5px block is-active">English</a>
        </li>
        <li class="lang-switcher__item w-full text-center">
          <a href="#" class="lang-switcher__link my-5px block">Русский</a>
        </li>
        <li class="lang-switcher__item w-full text-center">
          <a href="#" class="lang-switcher__link my-5px block">Українська</a>
        </li>
        <li class="lang-switcher__item w-full text-center">
          <a href="#" class="lang-switcher__link my-5px block">日本語</a>
        </li>-->
        <li
          class="lang-switcher__item w-full text-center"
          v-for="locale in availableLocales"
          :key="locale.code">
          <nuxt-link
            :to="switchLocalePath(locale.code)"
            class="lang-switcher__link my-5px block">
            {{ locale.name }}
          </nuxt-link>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style rel="scss">
.v-enter-active,
.v-leave-active {
  @apply transition-opacity;
  @apply duration-300;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>

<script>
import "@/components/LangSwitcher/LangSwitcher.scss"

import ClickOutside from 'vue-click-outside'

export default {
  name: 'LangSwitcher',
  computed: {
    availableLocales () {
      // return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      return this.$i18n.locales
    }
  },
  data() {
    return {
      toggle: false
    }
  },
  methods: {
    show() {
      this.toggle = true
    },
    hide() {
      this.toggle = false
    }
  },
  mounted () {
    // prevent click outside event with popupItem.
    this.popupItem = this.$el
  },

  directives: {
    ClickOutside
  }
}
</script>

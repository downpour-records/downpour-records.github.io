<template>
  <header>
    <div class="container">
      <div class="flex items-center justify-between">
        <div class="h-12 flex items-center justify-center order-2 md:order-1">
          <Logo
            :image-url="require('~/assets/images/header/Logo.svg')"
            width="140" height="40"
            alt="Downpour records logo" />
        </div>
        <Nav class="order-2" v-if="!isMobile"/>
        <LangSwitcher class="order-3" />
        <Burger
          class="order-1"
          v-if="isMobile"
          @popup='popup' />
      </div>
    </div>
  </header>
</template>

<script>
import "@/components/Header/Header.scss"

export default {
  name: 'Header',
  data() {
    return {
      isMobile: true,
    }
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 768;
    },
    popup(data) {
      // console.log(Object.values(data))
      // this.popupShow = Object.values(data)
      this.$emit('popup', {
        popupShow: Object.values(data)
      })
    }
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
}
</script>

<template>
  <a :href="link" class="contact-box">
    <img
      :data-src="imageUrl"
      :width="width"
      :height="height"
      class="lazyload"
      alt="">
    <span class="ml-10px">{{ text }}</span>
  </a>
</template>

<script>
import "@/components/ContactBox/ContactBox.scss"

export default {
  name: 'ContactBox',
  props: {
    imageUrl: {
      type: String,
      required: false,
      default: require('~/assets/images/envelope-solid.svg')
    },
    width: {
      type: String,
      required: false,
      default: '25'
    },
    height: {
      type: String,
      required: false,
      default: '25'
    },
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },
  data() {
    return {
    }
  },
  methods: {
  },
  mounted () {
  },
}
</script>

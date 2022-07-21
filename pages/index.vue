<template>
  <div class="wrapper">

    <Transition name="fade">
      <div
        class="overlay fixed top-0 left-0 z-40 w-full h-full pointer-events-auto bg-secondary bg-opacity-80 backdrop-filter backdrop-blur-md md:hidden"
        v-if="popupShow"
        @click="onAsideHide">
      </div>
    </Transition>

    <Transition name="slide">
      <aside
        class="md:hidden min-h-fill-available fixed top-0 left-0 w-80 h-full pointer-events-auto border-r border-skydarker z-50 bg-secondary bg-opacity-80"
        v-if="popupShow">
        <div class="flex items-center justify-between w-full px-0.5 sm:px-2 h-header d-aside-header-bg">
          <button class="focus:outline-none text-gray-300" @click="onAsideHide">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="p-3 w-12 h-12"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>

          <LangSwitcher @asideHide='onAsideHide' />
        </div>
        <div class="py-4 px-4 sm:px-6">
          <Nav @asideHide='onAsideHide'/>
        </div>
      </aside>
    </Transition>

    <Header @popup='onAsideShow' />
    <main>
      <Hero/>

      <section class="lg:pt-24 md:pt-20 pt-12 md:pb-16 pb-10 bg-secondary" id="releases">
        <div class="container">
          <h2 class="text-white mb-4 text-center md:text-6xl text-5xl font-medium">{{ $t('section_releases.text1') }}</h2>
          <p class="text-center text-white text-xl md:mb-16 mb-10 font-medium">{{ $t('section_releases.text2') }}</p>
          <div class="md:grid-cols-2 md:grid-flow-col md:gap-7 md:grid">
            <div class="flex flex-col mb-12 md:mb-0">
              <div class="bg-white p-5 rounded-xl border-b-8 border-primary md:flex-auto">
                <iframe width="100%" height="320" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1464524509&color=%2329220c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
              </div>
              <div class="text-center mt-9">
                <a href="https://tunelink.co/korveld/deep-woods-tales" target="_blank" class="btn btn-primary">{{ $t('section_releases.btnText') }}</a>
              </div>
            </div>

            <div class="flex flex-col">
              <div class="bg-white p-5 rounded-xl border-b-8 border-primary md:flex-auto">
                <iframe width="100%" height="320" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1439098399&color=%23373b50&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
              </div>
              <div class="text-center mt-9">
                <a href="https://tunelink.co/downpour/crimson-love" target="_blank" class="btn btn-primary">{{ $t('section_releases.btnText') }}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="lg:pt-40 md:pt-32 pt-24 lg:pb-80 md:pb-52 sm:pb-40 pb-32 bg-white relative" id="services">
        <img src="~/assets/images/dividers/landscape-explore.svg" class="lazyload w-full absolute top-0 left-0" alt="">
        <div class="container relative z-10">
          <h2 class="text-center md:text-6xl text-5xl font-medium md:mb-16 mb-10">{{ $t('section_services.text1') }}</h2>
          <div class="md:grid-cols-2 md:grid-flow-col md:gap-7 md:grid">
            <div class="flex flex-col mb-12 md:mb-0">
              <div class="bg-secondary border border-darkpurple pt-10 pb-6 md:px-9 px-8 text-center rounded-xl flex-auto flex flex-col items-center">
                <img src="~/assets/images/file-audio-solid.svg" class="lazyload" width="30" height="40" alt="">
                <p class="text-white pt-7 pb-5 font-bold text-3xl">{{ $t('section_services.text2') }}</p>
                <p class="text-white font-medium leading-6 mb-6" v-html="$t('section_services.text3')"></p>
                <p class="text-white font-bold xl:text-8xl text-6xl mt-auto">15<span class="xl:text-5xl text-3xl">$ / {{ $t('section_services.text4') }}</span></p>
              </div>
            </div>

            <div class="flex flex-col">
              <div class="bg-secondary border border-darkpurple pt-10 pb-6 md:px-9 px-8 text-center rounded-xl flex-auto flex flex-col items-center">
                <img src="~/assets/images/music-solid.svg" class="lazyload" width="40" height="40" alt="">
                <p class="text-white pt-7 pb-5 font-bold text-3xl">{{ $t('section_services.text5') }}</p>
                <p class="text-white font-medium leading-6 mb-6">{{ $t('section_services.text6') }}<br><br>
                  {{ $t('section_services.text7') }}</p>
                <p class="text-white font-bold xl:text-8xl text-6xl">35<span class="xl:text-5xl text-3xl">$ / {{ $t('section_services.text8') }}</span></p>
              </div>
            </div>
          </div>
          <div class="text-center mt-9">
            <a
              href="#"
              class="btn btn-primary"
              v-scroll-to="{
                el: '#contacts',
                easing: 'linear',
                duration: 500,
                offset: -70,
            }">{{ $t('section_services.btnText') }}</a>
          </div>
        </div>
        <img src="~/assets/images/dividers/discover-mountain.svg" class="lazyload w-full absolute bottom-0 left-0" alt="">
      </section>

      <section class="pt-12 md:pb-24 pb-14 bg-skyblue relative" id="contacts">
        <div class="container">
          <h2 class="mb-4 text-center md:text-6xl text-5xl font-medium">{{ $t('section_contacts.text1') }}</h2>
          <p class="text-center text-xl md:mb-12 mb-8 font-medium">{{ $t('section_contacts.text2') }}</p>

          <div class="bg-secondary p-10 text-center rounded-xl max-w-xl mx-auto border border-darkpurple">
            <div class="sm:grid-cols-2 sm:grid-flow-col sm:gap-5 sm:grid space-y-4 sm:space-y-0">
              <ContactBox
                :image-url="require('~/assets/images/envelope-solid.svg')"
                width="25"
                height="25"
                text="voloseg88@gmail.com"
                link="mailto:voloseg88@gmail.com"
              />
              <ContactBox
                :image-url="require('~/assets/images/instagram-brands.svg')"
                width="22"
                height="25"
                text="instagram"
                link="https://www.instagram.com/downpour_records_official/"
                target="_blank"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer/>
  </div>
</template>

<style lang="scss">
.fade-enter-active {
  transition: all 0.3s ease;
}

.fade-leave-active {
  transition: all 0.3s ease 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  transition: all 0.3s ease 0.2s;
}

.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}
</style>

<script>
/*import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";*/

export default {
  name: 'IndexPage',

  data() {
    return {
      popupShow: false
    }
  },

  methods: {
    onAsideShow(data) {
      // console.log(data.popupShow[0])
      this.popupShow = true
      document.body.classList.add('overflow-hidden')
    },
    onAsideHide() {
      this.popupShow = false
      document.body.classList.remove('overflow-hidden')
    }
  },

  mounted() {
    this.onAsideHide()
  },

  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: this.$t('seo.title'),
      htmlAttrs: {
        ...i18nHead.htmlAttrs
      },
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$t('seo.description')
        },
        {
          name: 'format-detection',
          content: 'telephone=no'
        },
        {
          name: 'msapplication-TileImage',
          content: './favicon-270x270-min.png'
        },
        ...i18nHead.meta
      ],
      /*script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js',
        }
      ],*/
      link: [
        { rel: 'icon', sizes: "16x16", href: './favicon-16x16-min.png' },
        { rel: 'icon', sizes: "32x32", href: './favicon-32x32-min.png' },
        { rel: 'icon', sizes: "192x192", href: './favicon-192x192-min.png' },
        { rel: 'icon', sizes: "512x512", href: './favicon-512x512-min.png' },
        { rel: 'apple-touch-icon', href: './favicon-180x180-min.png' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap'
        },
        ...i18nHead.link
      ],
    }
  }
}
</script>

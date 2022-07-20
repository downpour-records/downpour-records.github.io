<template>
  <div class="wrapper">
    <Header/>
    <main>
      <Hero/>

      <section class="pt-24 pb-16 bg-secondary">
        <div class="container">
          <h2 class="text-white mb-4 text-center text-6xl font-medium">Releases</h2>
          <p class="text-center text-white text-xl mb-16 font-medium">Check out our latest releases</p>
          <div class="grid-cols-2 grid-flow-col gap-7 grid">
            <div class="flex flex-col">
              <div class="bg-white p-5 rounded-xl border-b-8 border-primary flex-auto">
                <iframe width="100%" height="320" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1464524509&color=%2329220c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
              </div>
              <div class="text-center mt-9">
                <a href="https://tunelink.co/korveld/deep-woods-tales" target="_blank" class="btn btn-primary">Learn more</a>
              </div>
            </div>

            <div class="flex flex-col">
              <div class="bg-white p-5 rounded-xl border-b-8 border-primary flex-auto">
                <iframe width="100%" height="320" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1439098399&color=%23373b50&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
              </div>
              <div class="text-center mt-9">
                <a href="https://tunelink.co/downpour/crimson-love" target="_blank" class="btn btn-primary">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="pt-40 pb-80 bg-white relative">
        <img src="~/assets/images/dividers/landscape-explore.svg" class="lazyload w-full absolute top-0 left-0" alt="">
        <div class="container relative z-10">
          <h2 class="text-center text-6xl font-medium mb-16">Services</h2>
          <div class="grid-cols-2 grid-flow-col gap-7 grid">
            <div class="flex flex-col">
              <div class="bg-secondary border border-darkpurple pt-10 pb-6 px-10 text-center rounded-xl flex-auto flex flex-col items-center">
                <img src="~/assets/images/file-audio-solid.svg" class="lazyload" width="30" height="40" alt="">
                <p class="text-white pt-7 pb-5 font-bold text-3xl">Mixing and Mastering</p>
                <p class="text-white font-medium leading-6 mb-6">Mixing your song from scratch<br>
                  Adding some Equalizer (EQ)<br>
                  Level Balancing<br>
                  Stereo Panning<br>
                  Reverb, Delay & other effects<br>
                  Pitch correction<br>
                  Mastering</p>
                <p class="text-white font-bold text-8xl mt-auto">15<span class="text-5xl">$ / per track</span></p>
              </div>
            </div>

            <div class="flex flex-col">
              <div class="bg-secondary border border-darkpurple pt-10 pb-6 px-10 text-center rounded-xl flex-auto flex flex-col items-center">
                <img src="~/assets/images/music-solid.svg" class="lazyload" width="40" height="40" alt="">
                <p class="text-white pt-7 pb-5 font-bold text-3xl">Distribute Music</p>
                <p class="text-white font-medium leading-6 mb-6">Distribute your music to all major streaming services<br><br>
                  Anghami, iHeartRadio, AWA Music, Boomplay, Deezer, 7Digital, KKBOX, Mixcloud, Netease, Pandora, JioSaavn, Spotify, TikTok, United Media Agency, GraceNote, SoundCloud, Amazon Music, Claro Música/iMusica, Apple Music/iTunes, Resso, Napster, Tidal, QQ Music, Shazam, YouTube Music, Nuuday, Qobuz, SoundMouse, Moodagent, MediaNet, LINE, Fizy, Feel Music, Empik Music, Peloton, Sirius XM & Simfy Africa</p>
                <p class="text-white font-bold text-8xl">35<span class="text-5xl">$ / per release</span></p>
              </div>
            </div>
          </div>
          <div class="text-center mt-9">
            <a href="#" class="btn btn-primary">Learn more</a>
          </div>
        </div>
        <img src="~/assets/images/dividers/discover-mountain.svg" class="lazyload w-full absolute bottom-0 left-0" alt="">
      </section>

      <section class="pt-12 pb-24 bg-skyblue relative">
        <div class="container">
          <h2 class="mb-4 text-center text-6xl font-medium">Contacts</h2>
          <p class="text-center text-xl mb-12 font-medium">Contact us for additional info or to make a deal</p>

          <div class="bg-secondary p-10 text-center rounded-xl max-w-xl mx-auto border border-darkpurple">
            <div class="grid-cols-2 grid-flow-col gap-5 grid">
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

<script>
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

export default {
  name: 'IndexPage',

  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: 'Downpour Records - Official label website',
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
          content: 'Downpour Records label. We provide a range of services for the creation of original musical projects: studio mixing, mastering and distribution.'
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

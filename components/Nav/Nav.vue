<template>
  <nav class="main-nav">
    <ul class="main-nav__list list-none p-0 m-0 flex items-center">
      <li class="main-nav__item">
        <a href="#" class="main-nav__link" @click.self.prevent>{{ $t('nav.home') }}</a>
      </li>
      <li class="main-nav__item">
        <a href="#" class="main-nav__link" @click.self.prevent>{{ $t('nav.releases') }}</a>
      </li>
      <li class="main-nav__item">
        <a href="#" class="main-nav__link" @click.self.prevent>{{ $t('nav.services') }}</a>
      </li>
      <li class="main-nav__item">
        <a href="#" class="main-nav__link" @click.self.prevent>{{ $t('nav.contacts') }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import "@/components/Nav/Nav.scss"

export default {
  name: 'Nav'
}
</script>

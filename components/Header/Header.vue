<template>
  <header>
    <div class="container">
      <div class="flex items-center justify-between">
        <Logo :image-url="require('~/assets/images/header/Logo.svg')" width="140" height="40" alt="Downpour records logo" />
        <Nav/>
        <LangSwitcher/>
      </div>
    </div>
  </header>
</template>

<script>
import "@/components/Header/Header.scss"

export default {
  name: 'Header'
}
</script>

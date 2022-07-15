<script>
import "@/components/Header/Header.scss"

export default {
  name: 'Header'
}
</script>

<template>
  <header>
    <div class="container">
      <div class="flex items-center justify-between">
        <Logo image-path="/images/header/Logo.svg" />

        <LangSwitcher/>
      </div>
    </div>
  </header>
</template>

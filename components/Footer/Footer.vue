<template>
  <footer>
    <div class="container">
      <div class="flex items-center justify-between">
        <Logo :image-url="require('~/assets/images/header/Logo.svg')" width="160" height="46" alt="Downpour records logo" />
        <p class="text-white text-sm">&copy;2022 All Rights Reserved Downpour Records</p>
      </div>
    </div>
  </footer>
</template>

<script>
import "@/components/Footer/Footer.scss"

export default {
  name: 'Footer'
}
</script>

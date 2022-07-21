<template>
  <footer>
    <div class="container">
      <div class="flex items-center sm:justify-between sm:flex-row flex-col space-y-6 sm:space-y-0">
        <Logo :image-url="require('~/assets/images/header/Logo.svg')" width="160" height="46" alt="Downpour records logo" />
        <p class="text-white sm:text-sm text-xs">&copy; {{ currentDate.getFullYear() }} All Rights Reserved Downpour Records</p>
      </div>
    </div>
  </footer>
</template>

<script>
import "@/components/Footer/Footer.scss"

export default {
  name: 'Footer',
  data(){
    return {
      currentDate: new Date,
    }
  }
}
</script>

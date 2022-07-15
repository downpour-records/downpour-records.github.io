<template>
  <header>
    <div class="container">
      <div class="flex items-center">
        <Logo image-path="/images/header/Logo.svg" />
      </div>
    </div>
  </header>
</template>

<style lang="scss">
header {
  background: rgb(0 30 38 / 80%);
  border-bottom: 1px solid #203247;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  backdrop-filter: blur(12px);
}
</style>

<script>
export default {
  name: 'Header'
}
</script>

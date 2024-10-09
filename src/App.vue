<script setup>
  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'bootstrap/dist/js/bootstrap.js'
  import 'bootstrap-icons/font/bootstrap-icons.min.css'
</script>

<template>
  <div>
    <h2>app.vue</h2>
    <hr>
    <RouterLink :to="{ name: 'store' }">商店</RouterLink>
    <hr>
    <RouterView></RouterView>
  </div>
</template>

<style lang="css" scoped>

</style>
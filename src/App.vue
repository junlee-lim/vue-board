<script setup>


</script>

<template>
  <header>
    <router-link to="/">home </router-link>
    <router-link to="/write">write</router-link>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>
a{
  text-decoration: none;
}
</style>

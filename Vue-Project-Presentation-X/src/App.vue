<template>
  <div id="app" v-cloak v-bind:class="{'video-game-bg': $route.path == '/Videogames','programming-bg': $route.path == '/Programming'}">
    <Header></Header>  
    <main>
      <keep-alive><router-view/></keep-alive>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style lang="css">
#app {
  min-height: 100%;
}
</style>

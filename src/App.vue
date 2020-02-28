<template>
  <div id="app">
    <topmenu/>
    <div class="app-flex">
    <navbar/>
    <router-view/>
    </div>
  </div>
</template>
<script>
import Topmenu from './views/TopMenu.vue';
import Navbar from './views/NavBar.vue'

export default {
  name: "app",
  components: {
    Topmenu,
    Navbar
  }
}
</script>
<style lang="sass">
#app
  height: 100%
.container
  width: 97%
  margin: 0 auto
html
  height: 100%
body
  height: 100%
  margin: 0
  padding: 0
  font-family: 'Proxima Nova Rg'
button
  border: none
  background: none
  cursor: pointer
.app-flex
  height: 90%
  display: flex
  &:hover, &:focus
    outline: none
</style>

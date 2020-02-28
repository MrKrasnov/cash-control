<template>
  <div id="app">
    <topmenu/>
    <router-view/>
  </div>
</template>
<script>
import Topmenu from './views/TopMenu.vue';

export default {
  name: "app",
  components: {
    Topmenu,
  }
}
</script>
<style lang="sass">
.container
  width: 90%
  margin: 0 auto
body
  margin: 0
  padding: 0
  font-family: 'Proxima Nova Rg'
button
  border: none
  background: none
  cursor: pointer
  &:hover, &:focus
    outline: none
</style>

<template>
  <div id="app">
    <topmenu/>
    <div class="app-flex">
    <navbar/>
    <router-view/>
    <button class="Added">+</button>
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
a
  text-decoration: none
  color: black
  font-family: 'Proxima Nova Rg'
  cursor: url(./assets/icon/punch.png), pointer
#app
  height: 100%
  cursor: url(./assets/icon/cursor.png), pointer
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
// горизонтальный скролл
::-webkit-scrollbar 
  width: 12px
::-webkit-scrollbar-track
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3) 
  border-radius: 10px
::-webkit-scrollbar-thumb 
  border-radius: 10px
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5)
button
  border: none
  background: none
  cursor: url(./assets/icon/punch.png), pointer
  &:hover, &:focus
    outline: none
    cursor: url(./assets/icon/punch.png), pointer
.app-flex
  height: 90%
  display: flex
  &:hover, &:focus
    outline: none
.Added
  position: absolute
  height: 50px
  width: 50px
  color: white
  font-size: 30px
  background-color: #59c77e
  border-radius: 50%
  left: 93%
  top: 85%
  &:hover
    filter: invert(75%)
  &:focus
    filter: contrast(200%)
</style>

<template>
    <nav class="navigation" :class="{navbaropen: value, offnavbaropen: !value}" >
        <ul class="navigation-ul">
            <li v-for="(item, index) in items" :key="index">
                <router-link 
                :to="item.path"
                :exact="item.exact"
                >
                {{item.name}}
                </router-link>
                </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: ['value'],
    name: 'Navbar',
    data() {
    return {
      items: [
        { name: 'Счет', path: '/', component: 'Home', exact: true },
        { name: 'История', path: '/history', component: 'History' },
        { name: 'Планирование', path: '/planning', component: 'Planning'},
        { name: 'Новая запись', path: '/record', component: 'Record' },
        { name: 'Категории', path: '/categories', component: 'Categories' }, 
      ],
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
}
</script>
<style lang="sass">

.navigation
    position: relative
    padding-right: 1.5%
    background-color: #e7e6cd
    border-right: 2px solid #96a387
    min-height: 100%
    width: 12%
    &-ul
        & li
            display: block
            margin: 30px 0
            & a
                font-family: 'Gotham Pro'
                color: black
                text-decoration: none
                &:hover
                    transition: 0.2s
                    color: #3ab003
                &:focus
                    color: #eb6e1e
.navbaropen 
  transition: cubic-bezier(0, 0, 0, 0) 0.5s
  right: 0%
.offnavbaropen
  transition: cubic-bezier(0.46, 0.63, 0.65, 0.21) 2s
  right: 15%
</style>
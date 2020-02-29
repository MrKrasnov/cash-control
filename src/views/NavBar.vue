<template>
    <nav class="navigation">
        <ul class="navigation-ul">
            <li v-for="(item, index) in items" :key="index">
                <router-link :to="item.path">
                {{item.name}}
                </router-link>
                </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
    return {
      items: [
        { name: 'Счет', path: '/', component: 'Home' },
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
</style>
<template>
    <div class="orm">
        <topmenu/>
        <div class="app-flex">
        <navbar/>
        <router-view/>

        <router-link :to="'/record'">
            <button @click="currentRouteName = ''" class="Added">+</button>
        </router-link>
        
        </div>
    </div>
</template>
<script>
import Topmenu from './crm/TopMenu.vue';
import Navbar from './crm/NavBar.vue';

export default {
name: 'MainLayout',
components: {
    Topmenu,
    Navbar,
}
}
</script>
<style lang="sass">
.orm
    height: 100%
</style>
<template>
    <div class="orm">
        <topmenu/>
        <div class="app-flex">
        <navbar/>
        <router-view/>
        <button class="Added">+</button>
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
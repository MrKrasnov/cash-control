<template>
    <header>
        <div class="container">
            <div class="topmenu">
                <div class="topmenu-start">
                    <div class='topmenu-start-component'>
                        <button @click="$emit('click')" class='topmenu-start-component-btn'>
                            <img class='topmenu-start-component-btn-img' src="../../assets/icon/menu.svg" alt="menu-svg">
                        </button>
                    </div>
                    <div class='topmenu-start-component'>
                        12.12.12
                    </div>
                </div>
                <div class="topmenu-start-button">
                    <button class="topmenu-start-profile">
                        <router-link :to="'/profile'">
                            <div @click="currentRouteName = ''">User Name</div>
                        </router-link>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Topmenu',
    computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
}
</script>
<style lang="sass">
header
    background-color: #89aa94 
    height: 10%
    @media (max-height: 500px)
        height: 65px
header .container
    height: 100%
.topmenu
    height: 100%
    display: flex
    justify-content: space-between
    align-items: center
    &-start
        display: flex
        align-items: center
        &-button
            height: 100%
        &-profile
            height: 100%
            padding: 0 10px
            font-size: 18px
            &:hover
                transition: 1s
                backdrop-filter: opacity(0.90)
        &-component
            margin: 0 15px
            font-size: 20px
            &-btn
                width: 50px
                height: 50px
                &-img
                    width: 100%
                    height: 100%
</style>
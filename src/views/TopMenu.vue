<template>
    <header>
        <div class="container">
            <div class="topmenu">
                <div class="topmenu-start">
                    <div class='topmenu-start-component'>
                        <button class='topmenu-start-component-btn'>
                            <img class='topmenu-start-component-btn-img' src="../assets/menu.svg" alt="menu-svg">
                        </button>
                    </div>
                    <div class='topmenu-start-component'>
                        12.12.12
                    </div>
                </div>
                <div>
                    <button class="topmenu-start-profile">
                        User Name
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Topmenu',
}
</script>
<style lang="sass">
header
    background-color: #89aa94 
    height: 10%
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
        &-profile
            padding: 25px 10px
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
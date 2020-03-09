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
                        {{date | date('datetime')}}
                    </div>
                </div>
                <div class="topmenu-start-button">
                    <button v-on:click="downmenu()" class="topmenu-start-profile">
                            <div>User Name &#8595;</div>
                            <div class="offmenu" :class="{dropmenu: menu}">
                            <ul>
                                <li>
                                    <router-link :to="'/profile'">
                                    <div>Профиль</div>
                                    </router-link>
                                </li>
                                <li>
                                    <a v-on:click.prevent="logout">выйти</a>
                                </li>
                            </ul>
                            </div>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Topmenu',
    data() {
        return {
            menu: false,
            date: new Date(),
            interval: null,
        }
    },
    methods: {
        logout: function(){
            // пользователь вышел сообщение в url
            this.$router.push('/login?message=logout')
        },
        downmenu: function(){
            if(this.menu){
                this.menu = false;
            } else{
                this.menu = true;
            }
        },
    },
    mounted(){
        let dateloc = new Date()
        this.interval = setInterval(() => {
            this.date = new Date()
        }, 1000);
    },
    beforeDestroy() {
        clearInterval(this.interval)
    },
    computed: {
        currentRouteName() {
            return this.$route.name;
        },
  },
}
</script>
<style lang="sass">
.offmenu
    position: absolute
    transform: translate(-10px, -200px)
    & ul
        background-color: #bdd77e
        margin-block-start: 1.2em
        padding-inline-start: 23px
        padding-inline-end: 25px
        border-radius: 0px 0px 10px 10px
    & ul li
        display: block
        margin-bottom: 5px
        & a:hover
            color: orange
.dropmenu
    transform: translate(-10px, 3px)
    transition: 1s
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
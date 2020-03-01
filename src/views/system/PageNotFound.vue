<template>
    <div class="login">
        <div class="login-container">
            <div class="login-container-content">
                <h1>Ой, а что <br> вы тут делаете?</h1>
                <hr>
                <router-link :to="'/'">
                  <button>На главную!</button>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'PageNotFound',
};
</script>
<style lang="sass">
.path-regist
    display: inline
    font-size: 13px
    color: #757575
.login
    padding-top: 20vh
    background-color: #757575
    display: flex
    align-items: center
    flex-direction: column
    height: 80vh
    &-container
        width: 300px
        transition: box-shadow .25s, -webkit-box-shadow .25s
        border-radius: 2px
        position: relative
        margin: .5rem 0 1rem 0
        background-color: #fff
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)
        &-content
            padding: 24px
            border-radius: 0 0 2px 2px
            & h1
                text-align: center
            & button
                background-color: #59c77e
                color: white
                font-size: 15px
                padding: 10px 20px
                margin-top: 20px
                &:hover
                    transition: 1.5s
                    filter: contrast(200%)
</style>
<template>
    <div class="profile">
        <div class="profile-container">
            <h1>Профиль</h1>
            <hr>
        <div>
            <input class="profile-container-input" type="name" placeholder="Имя">
        </div>
        <button class="profile-container-button">Обновить</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Profile',
}
</script>
<style lang="sass">
.profile
    width: 88%
    &-container
        padding-top: 50px
        width: 85%
        margin: 0 auto
        &-button
            background-color: #59c77e
            color: white
            font-size: 15px
            padding: 10px 20px
            margin-top: 20px
            &:hover
                transition: 1.5s
                filter: contrast(200%)
        &-input
            width: 35%
            padding-top: 30px
            margin-top: 20px
            border: none
            padding-bottom: 10px
            padding-left: 10px
            border-bottom: 1px solid grey
            &:focus
                border-bottom: 1px solid #59c77e
                outline: none
                &::placeholder
                    position: relative
                    bottom: 25px
                    color: #59c77e
</style>
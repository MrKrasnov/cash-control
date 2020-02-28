<template>
    <nav class="navigation">
        <ul class="navigation-ul">
            <li><a href="#">Счёт</a></li>
            <li><a href="#">История</a></li>
            <li><a href="#">Планирование</a></li>
            <li><a href="#">Новая запись</a></li>
            <li><a href="#">Категории</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
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
            margin: 10px 0
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
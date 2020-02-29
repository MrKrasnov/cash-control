<template>
    <div class="categories">
        <div class="categories-container">
            <h1>Категории</h1>
            <hr>
            <div class="categories-container-flex">
                <div class="categories-container-flex-form">
                    <form action="#">
                        <h2>Создать</h2>
                        <div class="categories-container-flex-form-input">
                            <input type="text" placeholder="Название">
                            <input type="text" placeholder="Лимит">
                        </div>
                        <button class="categories-container-flex-form-input-btn">СОЗДАТЬ</button>
                    </form>
                </div>
                <div class="categories-container-flex-form">
                    <form action="#">
                        <h2>Редактировать</h2>
                        <div class="categories-container-flex-form-input">
                            <input type="text" placeholder="Категория">
                            <input type="text" placeholder="Лимит">
                        </div>
                        <button class="categories-container-flex-form-input-btn">ОБНОВИТЬ</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Categories',
}
</script>
<style lang="sass">
.categories
    width: 88%
    &-container
        padding-top: 50px
        width: 85%
        margin: 0 auto
        &-flex
            display: flex
            &-form
                width: 100%
                &-input
                    display: flex
                    flex-direction: column
                    & input
                        display: block
                        padding-top: 30px
                        margin-top: 20px
                        border: none
                        padding-bottom: 10px
                        padding-left: 10px
                        margin-right: 20px
                        border-bottom: 1px solid grey
                        &:focus
                            border-bottom: 1px solid #59c77e
                            outline: none
                            &::placeholder
                                position: relative
                                bottom: 25px
                                color: #59c77e
                    &-btn
                        background-color: #59c77e
                        color: white
                        margin-top: 25px
                        padding: 10px 20px
                        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)
                        &:hover
                            filter: contrast(200%)

</style>
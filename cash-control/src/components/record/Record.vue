<template>
    <div class="record">
        <div class="record-container">
            <h1>Новая запись</h1>
            <hr>
            <p>Выберите категорию</p>
            <form action="#">
                <div>
                    <input name="budget" id="income" type="radio">
                    <label for="income">Доход</label>
                    <input name="budget" id="cost" type="radio">
                    <label for="cost">Расходы</label>
                    <div class="record-container-input">
                        <input type="text" placeholder="Сумма">
                        <input type="text" placeholder="Описание">
                        <button class="record-container-input-btn">Создать</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Record',
}
</script>
<style lang="sass">
    .record
        width: 88%
        &-container
            padding-top: 50px
            width: 85%
            margin: 0 auto
            & label
                margin-right: 30px
                &:focus, &:hover
            &-input
                display: flex
                flex-direction: column
                & input
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
                &-btn
                    background-color: #59c77e
                    color: white
                    font-size: 15px
                    padding: 10px 20px
                    margin-top: 20px
                    width: 10%                        
                    &:hover
                        transition: 1.5s
                        filter: contrast(200%)
</style>
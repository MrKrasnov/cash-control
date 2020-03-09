<template>
    <div class="strecord">
        <div class="history-container-flex bold">
            <div>
                <p>#</p>
            </div>
            <div>
                <p>Сумма</p>
            </div>
            <div>
                <p>Дата</p>
            </div>
            <div>
                <p>Категория</p>
            </div>
            <div>
                <p>Тип</p>
            </div>
            <div>
                <p>Открыть</p>
            </div>
        </div>
        <hr>
        <singlerecord/>
    </div>
</template>

<script>
import Singlerecord from './singlerecord/Singlerecord.vue';

export default {
    name: "Inforecord",
    components: {
        Singlerecord,
    }
}
</script>
<style lang="sass">
    .strecord
        margin-top: 100px       
    .history-container-flex
        display: flex
        justify-content: space-between 
        align-items: center 
    .bold p
        font-weight: bold     
</style>
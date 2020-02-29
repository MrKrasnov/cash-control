<template>
    <div class="planning">
        <div class="planning-container">
            <div class="planning-container-flex">
                <h1>Планирование</h1>
                <h1>12 212</h1>
            </div>
            <hr>
            <singleplaninng/>
        </div>
    </div>
</template>
<script>
import Singleplaninng from './Singleplanning.vue';

export default {
    name: 'Planning',
    components: {
        Singleplaninng,
    }
}
</script>
<style lang="sass">
.planning
    width: 88%
    &-container
        padding-top: 50px
        width: 85%
        margin: 0 auto
        &-flex
            display: flex
            justify-content: space-between
            & h1
                font-weight: normal
            &-bold
                font-weight: bold
            
            
</style>
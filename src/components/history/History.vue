<template>
    <div class="history">
        <div class="history-container">
            <h1>История записей</h1>
            <hr>
            <inforecord/>
        </div>
        <router-view/>
    </div>
</template>
<script>
import Inforecord from './record/Inforecord.vue';

export default {
    name: 'History',
    components: {
        Inforecord,
    }
}
</script>
<style lang="sass">
    .history
        width: 88%
        &-container
            padding-top: 50px
            width: 85%
            margin: 0 auto
</style>
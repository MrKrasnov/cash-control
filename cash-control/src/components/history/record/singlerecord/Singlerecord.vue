<template>
    <div>
        <div class="history-container-flex">
            <div>
                <p>1</p>
            </div>
            <div>
                <p>1212</p>
            </div>
            <div>
                <p>12.12.12</p>
            </div>
            <div>
                <p>name</p>
            </div>
            <div>
                <p>Расход</p>
            </div>
            <div>
                <button class="history-container-flex-btn">OPEN</button>
            </div>
        </div>
        <hr>
    </div>
</template>
<script>
export default {
    name: "Singlerecord"
}
</script>
<style lang="sass">
    .history-container-flex-btn
        display: block
        color: white
        background-color: #59c77e
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)
        &:hover
            filter: contrast(200%)
</style>
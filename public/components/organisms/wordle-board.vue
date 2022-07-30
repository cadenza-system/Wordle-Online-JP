<template>
<div id="wordle-board">
    <div class="panel-row" v-for="i in limit" v-bind:key="i">
        <wordle-panel-row></wordle-panel-row>
    </div>
</div>
</template>
<script>
    module.exports = {
        data: function(){
            return {
                limit: 24,
            }
        },
        components: {
            'wordle-panel-row': httpVueLoader('../molecules/wordle-panel-row.vue'),
        },
    }
</script>
<style scoped>
#wordle-board {
    background-color: coral;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
}
</style>
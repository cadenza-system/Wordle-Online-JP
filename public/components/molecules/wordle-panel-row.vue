<template>
<div id="wordle-panel-row">
    <wordle-panel class="panel" :size="panelSize"></wordle-panel>
    <wordle-panel class="panel" :size="panelSize"></wordle-panel>
    <wordle-panel class="panel" :size="panelSize"></wordle-panel>
    <wordle-panel class="panel" :size="panelSize"></wordle-panel>
    <wordle-panel class="panel" :size="panelSize"></wordle-panel>
</div>
</template>
<script>
    module.exports = {
        data: function(){
            return {
                anser: [' ', ' ', ' ', ' ', ' '],
                panelSize: '3vw',
            }
        },
        components: {
            'wordle-panel': httpVueLoader('./wordle-panel.vue'),
        },
    }
</script>

<style scoped>
#wordle-panel-row {
    display: flex;
}

.panel {
    margin: 0.3vw;
}
</style>
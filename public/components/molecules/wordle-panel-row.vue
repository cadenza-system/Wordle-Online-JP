<template>
<div id="wordle-panel-row">
    <wordle-panel class="panel"></wordle-panel>
    <wordle-panel class="panel"></wordle-panel>
    <wordle-panel class="panel"></wordle-panel>
    <wordle-panel class="panel"></wordle-panel>
    <wordle-panel class="panel"></wordle-panel>
</div>
</template>
<script>
    module.exports = {
        data: function(){
            return {
                msg: "Hellow from Vue",
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
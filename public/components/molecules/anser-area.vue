<template>
<div id="anserArea">
    <wordle-panel :a-size="size"></wordle-panel>
    <wordle-panel :size="size"></wordle-panel>
    <wordle-panel :size="size"></wordle-panel>
    <wordle-panel :size="size"></wordle-panel>
    <wordle-panel :size="size"></wordle-panel>
</div>
</template>
<script>
    module.exports = {
        data: function(){
            return {
                size: '20px'
            }
        },
        components: {
            'wordle-panel': httpVueLoader('./wordle-panel.vue'),
        },
    }
</script>
<style scoped>
</style>
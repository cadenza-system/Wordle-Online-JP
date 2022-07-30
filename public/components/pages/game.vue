<template>
    <div id="game">
        <game-template></game-template>
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
            'game-template': httpVueLoader('../templates/game-template.vue'),
        },
    }
</script>

<template>
<div id="player-list">
    <player-info></player-info>
    <player-info></player-info>
    <player-info></player-info>
    <player-info></player-info>
    <player-info></player-info>
</div>
</template>
<script>
    module.exports = {
        data: function(){
            return {
            }
        },
        components: {
            'player-info': httpVueLoader('../molecules/player-info.vue'),
        },
    }
</script>
<style scoped>
#player-list {
    display: flex;
    flex-wrap: wrap;
    width: 20vw;
    height: 100%;
    align-items: center;
}
</style>
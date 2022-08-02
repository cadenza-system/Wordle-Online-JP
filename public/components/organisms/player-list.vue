<template>
<div id="player-list">
    <div v-for="player in playerList" :key="player.id">
        <player-info :player="player"></player-info>
    </div>
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
        props: ["playerList"]
    }
</script>
<style scoped>
#player-list {
    display: flex;
    flex-wrap: wrap;
    width: 20vw;
    height: 100%;
    align-items: center;
    justify-content: space-around;
}
</style>
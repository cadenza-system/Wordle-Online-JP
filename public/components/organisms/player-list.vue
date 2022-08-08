<template>
<div id="player-list">
    <div v-for="player in playerList" :key="player.id">
        <player-info class="item" :player="player"></player-info>
    </div>
</div>
</template>
<script>
    module.exports = {
        components: {
            'player-info': httpVueLoader('../molecules/player-info.vue'),
        },
        props: ["playerList"]
    }
</script>
<style scoped>
#player-list {
    width: 20vw;
    height: 100%;
    align-items: flex-start;
}
</style>
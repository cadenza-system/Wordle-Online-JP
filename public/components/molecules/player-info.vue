<template>
<div id="player-info">
    <icon :color="player.color"></icon>
    <div class="player-name">
        {{ player.nickname }}
    </div>
    <div class="score">
        {{ player.score }}p
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
            'icon': httpVueLoader('../atoms/icon.vue'),
        },
        props: ['player']
    }
</script>
<style scoped>
#player-info {
    display: flex;
    background-color: whitesmoke;
    justify-content: space-between;
    align-items: center;
    padding: 3px;
    height: 3vw;
}
.player-name {
    margin-left: 2px;
}

.score {
    margin-left:0.5vw;
}
</style>
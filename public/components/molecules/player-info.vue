<template>
<div id="player-info">
    <icon></icon>
    <div class="player-name">
        player
    </div>
    <div class="score">0</div>
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
    width: 45%;
}
.player-name {
    margin-left: 2px;
}
</style>
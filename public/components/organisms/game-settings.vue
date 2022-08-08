<template>
<div id="game-settings">
    <div class="header">GAME SETTEINGS</div>
    <div class="setting-content">
        <div class="item round">
            <div class="item-name">ラウンド</div>
            <input type="number" name="round" id="round" value="1" min="1" max="10">
        </div>
        <div class="item limit">
            <div class="item-name">解答可能数</div>
            <input type="number" name="limit" id="limit" value="6" min="6" max="24">
        </div>
        <div class="item start">
            <app-button>START</app-button>
        </div>
    </div>
    <div v-if="!isHost" class="overlay">
        ホストの開始を待っています
    </div>
</div>
</template>
<script>
    module.exports = {
        data: function(){
            return {
            }
        },
        props: ['isHost'],
        components: {
            'app-button': httpVueLoader('../atoms/button.vue'),
        },
    }
</script>
<style scoped>
#game-settings {
    position: relative;
    width: 100%;
    height: 100%;
}

.setting-content {
    width: 100%;
    height: 80%; 
}
.header {
    text-align: center;
    height: 20%;
}
.item {
    display: flex;
}

.overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%; 
    background: rgba(255, 255, 255, 0.2);
}
</style>
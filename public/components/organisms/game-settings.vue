<template>
<div id="game-settings">
    <div class="header">GAME SETTEINGS</div>
    <div class="setting-content">
        <div class="items">
            <div class="item round">
                <div class="item-name">ラウンド</div>
                <input type="number" v-model="round" id="round" value="1" min="1" max="10" :disabled="!isHost">
            </div>
            <div class="item limit">
                <div class="item-name">解答可能数</div>
                <input type="number" v-model="limit" id="limit" value="6" min="6" max="24" :disabled="!isHost">
            </div>
            <div class="item first-hint">
                <div class="item-name">ファーストヒント</div>
                <toggle-button class="toggle-button" text-left="ON" text-right="OFF" width="33%" @toggle="toggleFirstHint" :disabled="!isHost"></toggle-button>
            </div>
        </div>
        <app-button :disabled="!isHost">{{ buttonText() }}</app-button>
    </div>
</div>
</template>
<script>
    module.exports = {
        data: function(){
            return {
                round: 1,
                limit: 6,
                enableFirstHint: true,
            }
        },
        props: ['isHost'],
        components: {
            'app-button': httpVueLoader('../atoms/button.vue'),
            'toggle-button': httpVueLoader('../molecules/toggle-button.vue'),
        },
        methods: {
            toggleFirstHint(enableFirstHint) {
                this.enableFirstHint = !enableFirstHint
            },
            gameStart() {
                console.log(this.round)
                console.log(this.limit)
                console.log(this.enableFirstHint)
            },
            buttonText() {
                return this.isHost ? 'START' : 'Waiting Host...'
            }
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
    justify-content: space-between;
}

.items {
    display: flex;
    flex-direction: column;
    height: 70%;
    justify-content: space-around;
}

input {
    width: 3rem;
    text-align: center;
    border: 2px lightgray solid;
    outline: none;
    user-select: none;
}
</style>
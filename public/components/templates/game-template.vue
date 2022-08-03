<template>
    <div id="game-template">
        <app-header></app-header>
        <div class="content">
            <wordle-board class="wordle-board" ref="board" correct-anser="アリガトウ"></wordle-board>
            <div class="bottom-row">
                <div class="bottom-row-inner">
                    <player-list :player-list="playerList"></player-list>
                    <wordle-keyboard class="wordle-keyboard" @enter="enter"></wordle-keyboard>
                </div>
            </div>
        </div>
        <div v-if="showJoinModal">
            <join-modal @join="join"></join-modal>
        </div>
    </div>
</template>
<script>
    module.exports = {
        data: function(){
            return {
                playerList: State.playerList().list,
                showJoinModal: true
            }
        },
        components: {
            'app-header': httpVueLoader('../organisms/header.vue'),
            'wordle-board': httpVueLoader('../organisms/wordle-board.vue'),
            'wordle-keyboard': httpVueLoader('../organisms/keyboard.vue'),
            'player-list': httpVueLoader('../organisms/player-list.vue'),
            'join-modal': httpVueLoader('../organisms/join-modal.vue'),
        },
        methods: {
            enter(anser) {
                this.$refs.board.setAnser(anser)
            },
            join(nickname) {
                // TODO socket join
                this.showJoinModal = false
            }
        }
    }
</script>
<style scoped>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 92vh;
    margin:0 3vw;
}

.wordle-board {
    height: 55%;
}

.bottom-row {
    display: flex;
    justify-content:center;
    width: 100%;
    height: 45%;
}
.bottom-row-inner {
    display: flex;
    justify-content:space-around;
    width: 60%;
    height: 100%;
}
</style>
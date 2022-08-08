<template>
    <div id="game-template">
        <app-header></app-header>
        <div class="content">
            <wordle-board class="wordle-board" ref="board" :anser-list="anserList" correct-anser="アリガトウ"></wordle-board>
            <div class="bottom-row">
                <div class="bottom-row-inner">
                    <div v-if="playerList">
                        <player-list class="bottom-row-item" :player-list="playerList"></player-list>
                    </div>
                    <wordle-keyboard class="wordle-keyboard bottom-row-item" @enter="enter"></wordle-keyboard>
                    <right-area class="bottom-row-item right-area">
                        <game-settings :is-host="isHost"></game-settings>
                    </right-area>
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
                playerList: null,
                anserList: null,
                showJoinModal: true,
                isHost: false
            }
        },
        components: {
            'app-header': httpVueLoader('../organisms/header.vue'),
            'wordle-board': httpVueLoader('../organisms/wordle-board.vue'),
            'wordle-keyboard': httpVueLoader('../organisms/keyboard.vue'),
            'player-list': httpVueLoader('../organisms/player-list.vue'),
            'join-modal': httpVueLoader('../organisms/join-modal.vue'),
            'right-area': httpVueLoader('../organisms/right-area.vue'),
            'game-settings': httpVueLoader('../organisms/game-settings.vue')
        },
        methods: {
            enter(anser) {
                // this.$refs.board.setAnser(anser)
                State.socket.emitAnser(
                    State.roomId(),
                    State.playerId(),
                    anser
                )
            },
            update() {
                this.playerList = State.playerList().list
                this.anserList = State.anserList().list
                this.isHost = State.playerList().getPlayer(State.playerId()).isHost
            },
            join(nickname) {
                // TODO socket join
                this.showJoinModal = false
                State.socket.emitRoomJoin(this.$route.query.roomid, nickname)
            }
        },
        mounted() {
            State.socket.onSyncRoom(this.update)
            State.socket.onSyncAnser(this.update)
            let playerList = State.playerList().list
            if (playerList) {
                this.playerList = playerList
            }
            if (State.playerId()) {
                this.showJoinModal = false
                return
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
    width: 90%;
    height: 100%;
}

.bottom-row-item {
    margin: 0 3vw;
}

</style>
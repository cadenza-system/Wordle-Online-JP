<template>
    <div id="home">
        <app-header></app-header>
        <nickname-input-area @push="createRoom" button-name="CREATE ROOM"></nickname-input-area>
    </div>
</template>
<script>
    module.exports = {
        data: function(){
            return {
                erroeMessage: null,
                nickname: '',
            }
        },
        components: {
            'app-header': httpVueLoader('../organisms/header.vue'),
            'nickname-input-area': httpVueLoader('../organisms/nickname-input-area.vue'),
        },
        methods: {
            createRoom(value) {
                this.nickname = value
                // バリデーション
                this.validate()

                if (this.errorMessage) {
                    alert(this.errorMessage)
                    return
                }
                State.socket.emitCreateRoom(this.nickname)
            },
            toGame() {
                this.$router.push(`/game?room-id=${State.roomId()}`)
            },
            validate() {
                this.errorMessage = ''
                if (!this.nickname) {
                    this.errorMessage = 'ニックネームを入力してください'
                    return
                }

                if (this.nickname.length > 10) {
                    this.errorMessage = 'ニックネームは10文字までです'
                    return
                }
            }
        },
        mounted() {
            State.socket.onCreateRoom(this.toGame)
        }
    }
</script>
<style scoped>
.content {
    display: flex;
    justify-content: center;
}
.inner-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30vw;
    border-style: solid;
    border-width: 5px;
    border-color: lightgray;
    margin-top: 4vh;
    height: 40vh;
    justify-content: space-around;
    background-color: whitesmoke;
}

.nickname-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
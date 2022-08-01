<template>
    <div id="game-template">
        <app-header></app-header>
        <div class="content">
            <wordle-board class="wordle-board" ref="board" correct-anser="アリガトウ"></wordle-board>
            <wordle-keyboard class="wordle-keyboard" @enter="enter"></wordle-keyboard>
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
            'app-header': httpVueLoader('../organisms/header.vue'),
            'wordle-board': httpVueLoader('../organisms/wordle-board.vue'),
            'wordle-keyboard': httpVueLoader('../organisms/keyboard.vue')
        },
        methods: {
            enter(anser) {
                this.$refs.board.setAnser(anser)
            }
        }
    }
</script>
<style scoped>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: pink;
    height: 92vh;
    margin:0 3vw;
}

.wordle-board {
    height: 60%;
}

.wordle-keyboard {
    height: 40%;
}
</style>
<template>
    <div id="game-template">
        <app-header></app-header>
        <div class="content">
            <wordle-board class="wordle-board"></wordle-board>
            <wordle-keyboard class="wordle-keyboard"></wordle-keyboard>
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
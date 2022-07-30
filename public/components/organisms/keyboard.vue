<template>
<div id="wordle-keyboard">
    <div class="buttons">
        <toggle-button class="toggle-button" text-left="通常" text-right="゛゜小" width="33%"></toggle-button>
            <button>ギブアップ</button>
            <button>Backspace</button>
    </div>
    <div class="keys">
        <div class="column">
            <keyboard-key class="key" value="ア"></keyboard-key>
            <keyboard-key class="key" value="イ"></keyboard-key>
            <keyboard-key class="key" value="ウ"></keyboard-key>
            <keyboard-key class="key" value="エ"></keyboard-key>
            <keyboard-key class="key" value="オ"></keyboard-key>
        </div>
        <div class="column">
            <keyboard-key class="key" value="カ"></keyboard-key>
            <keyboard-key class="key" value="キ"></keyboard-key>
            <keyboard-key class="key" value="ク"></keyboard-key>
            <keyboard-key class="key" value="ケ"></keyboard-key>
            <keyboard-key class="key" value="コ"></keyboard-key>
        </div>
        <div class="column">
            <keyboard-key class="key" value="サ"></keyboard-key>
            <keyboard-key class="key" value="シ"></keyboard-key>
            <keyboard-key class="key" value="ス"></keyboard-key>
            <keyboard-key class="key" value="セ"></keyboard-key>
            <keyboard-key class="key" value="ソ"></keyboard-key>
        </div>
        <div class="column">
            <keyboard-key class="key" value="タ"></keyboard-key>
            <keyboard-key class="key" value="チ"></keyboard-key>
            <keyboard-key class="key" value="ツ"></keyboard-key>
            <keyboard-key class="key" value="テ"></keyboard-key>
            <keyboard-key class="key" value="ド"></keyboard-key>
        </div>
        <div class="column">
            <keyboard-key class="key" value="ナ"></keyboard-key>
            <keyboard-key class="key" value="ニ"></keyboard-key>
            <keyboard-key class="key" value="ヌ"></keyboard-key>
            <keyboard-key class="key" value="ネ"></keyboard-key>
            <keyboard-key class="key" value="ノ"></keyboard-key>
        </div>
        <div class="column">
            <keyboard-key class="key" value="ハ"></keyboard-key>
            <keyboard-key class="key" value="ヒ"></keyboard-key>
            <keyboard-key class="key" value="フ"></keyboard-key>
            <keyboard-key class="key" value="ヘ"></keyboard-key>
            <keyboard-key class="key" value="ホ"></keyboard-key>
        </div>
        <div class="column">
            <keyboard-key class="key" value="マ"></keyboard-key>
            <keyboard-key class="key" value="ミ"></keyboard-key>
            <keyboard-key class="key" value="ム"></keyboard-key>
            <keyboard-key class="key" value="メ"></keyboard-key>
            <keyboard-key class="key" value="モ"></keyboard-key>
        </div>
        <div class="column">
            <keyboard-key class="key" value="ヤ"></keyboard-key>
            <keyboard-key class="key"></keyboard-key>
            <keyboard-key class="key" value="ユ"></keyboard-key>
            <keyboard-key class="key"></keyboard-key>
            <keyboard-key class="key" value="ヨ"></keyboard-key>
        </div>
        <div class="column">
            <keyboard-key class="key" value="ラ"></keyboard-key>
            <keyboard-key class="key" value="リ"></keyboard-key>
            <keyboard-key class="key" value="ル"></keyboard-key>
            <keyboard-key class="key" value="レ"></keyboard-key>
            <keyboard-key class="key" value="ロ"></keyboard-key>
        </div>
        <div class="column">
            <keyboard-key class="key" value="ワ"></keyboard-key>
            <keyboard-key class="key" value="ヲ"></keyboard-key>
            <keyboard-key class="key" value="ン"></keyboard-key>
            <keyboard-key class="key"></keyboard-key>
            <keyboard-key class="key" value="ー"></keyboard-key>
        </div>
    </div>
    <div class="enter-row">
        <button>ENTER</button>
    </div>

</div>
</template>
<script>
    module.exports = {
        data: function(){
            return {
                msg: "Hellow from Vue",
            }
        },
        components: {
            'keyboard-key': httpVueLoader('../molecules/keyboard-key.vue'),
            'toggle-button': httpVueLoader('../molecules/toggle-button.vue')
        },
    }
</script>
<style scoped>
#wordle-keyboard {
    background-color: aquamarine;
}


.keys {
    display: flex;
    justify-content: center;
}

.buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.enter-row {
    display: flex;
    justify-content: center;
}
.key {
    margin: 0.1vw;
}
</style>
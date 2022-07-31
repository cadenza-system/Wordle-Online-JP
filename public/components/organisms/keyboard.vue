<template>
<div id="wordle-keyboard">
    <div class="buttons">
        <toggle-button class="toggle-button" text-left="通常" text-right="゛゜小" width="33%" @toggle="toggleKeyboard"></toggle-button>
            <button>ギブアップ</button>
            <button>Backspace</button>
    </div>
    <div class="keys">
        <div class="column" v-for="(row, i) in keys" v-bind:key="i + row.a">
                <keyboard-key class="key" :value="row.a" @push="pushKey"></keyboard-key>
                <keyboard-key class="key" :value="row.i" @push="pushKey"></keyboard-key>
                <keyboard-key class="key" :value="row.u" @push="pushKey"></keyboard-key>
                <keyboard-key class="key" :value="row.e" @push="pushKey"></keyboard-key>
                <keyboard-key class="key" :value="row.o" @push="pushKey"></keyboard-key>
        </div>
    </div>
    <div class="anser-area">
        <anser-area ref="anser"></anser-area>
    </div>
</div>
</template>
<script>
    module.exports = {
        data: function(){
            return {
                keys: [],
                showAnotherKeys: false,
            }
        },
        components: {
            'keyboard-key': httpVueLoader('../molecules/keyboard-key.vue'),
            'toggle-button': httpVueLoader('../molecules/toggle-button.vue'),
            'anser-area': httpVueLoader('../molecules/anser-area.vue')
        },
        methods: {
            toggleKeyboard(showAnotherKeys) {
                this.showAnotherKeys = showAnotherKeys
                this.getKeys()
            },
            getKeys() {
                if (!this.showAnotherKeys) {
                    this.$set(this.keys, 0 ,{a: 'ア', i: 'イ', u: 'ウ', e: 'エ', o: 'オ'})
                    this.$set(this.keys, 1 ,{a: 'カ', i: 'キ', u: 'ク', e: 'ケ', o: 'コ'})
                    this.$set(this.keys, 2 ,{a: 'サ', i: 'シ', u: 'ス', e: 'セ', o: 'ソ'})
                    this.$set(this.keys, 3 ,{a: 'タ', i: 'チ', u: 'ツ', e: 'テ', o: 'ト'})
                    this.$set(this.keys, 4 ,{a: 'ナ', i: 'ニ', u: 'ヌ', e: 'ネ', o: 'ノ'})
                    this.$set(this.keys, 5 ,{a: 'ハ', i: 'ヒ', u: 'フ', e: 'ヘ', o: 'ホ'})
                    this.$set(this.keys, 6 ,{a: 'マ', i: 'ミ', u: 'ム', e: 'メ', o: 'モ'})
                    this.$set(this.keys, 7 ,{a: 'ヤ', i: '', u: 'ユ', e: '', o: 'ヨ'})
                    this.$set(this.keys, 8 ,{a: 'ラ', i: 'リ', u: 'ル', e: 'レ', o: 'ロ'})
                    this.$set(this.keys, 9 ,{a: 'ワ', i: 'ヲ', u: 'ン', e: '', o: 'ー'})
                } else {
                    this.$set(this.keys, 0 ,{a: 'ァ', i: 'ィ', u: 'ゥ', e: 'ェ', o: 'ォ'})
                    this.$set(this.keys, 1 ,{a: 'ガ', i: 'ギ', u: 'グ', e: 'ゲ', o: 'ゴ'})
                    this.$set(this.keys, 2 ,{a: 'ザ', i: 'ジ', u: 'ズ', e: 'ゼ', o: 'ゾ'})
                    this.$set(this.keys, 3 ,{a: 'ダ', i: 'ジ', u: 'ス', e: 'デ', o: 'ド'})
                    this.$set(this.keys, 4 ,{a: '', i: '', u: 'ッ', e: '', o: ''})
                    this.$set(this.keys, 5 ,{a: 'バ', i: 'ビ', u: 'ブ', e: 'ベ', o: 'ボ'})
                    this.$set(this.keys, 6 ,{a: 'パ', i: 'ピ', u: 'プ', e: 'ペ', o: 'ポ'})
                    this.$set(this.keys, 7 ,{a: 'ャ', i: '', u: 'ュ', e: '', o: 'ョ'})
                    this.$set(this.keys, 8 ,{a: '', i: '', u: '', e: '', o: ''})
                    this.$set(this.keys, 9 ,{a: '', i: '', u: '', e: '', o: ''})
                }
            },
            pushKey(value) {
                this.$refs.anser.setValue(value)
            }
        },
        mounted() {
            this.getKeys()
        }
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
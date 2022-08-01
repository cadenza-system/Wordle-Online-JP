<template>
<div id="anserArea">
    <div class="anser">
        <wordle-panel :size="size" :value="anser[0]"></wordle-panel>
        <wordle-panel :size="size" :value="anser[1]"></wordle-panel>
        <wordle-panel :size="size" :value="anser[2]"></wordle-panel>
        <wordle-panel :size="size" :value="anser[3]"></wordle-panel>
        <wordle-panel :size="size" :value="anser[4]"></wordle-panel>
    </div>
    <enter @click="enter"></enter>
</div>
</template>
<script>
    module.exports = {
        data: function(){
            return {
                size: '4vh',
                anser: []
            }
        },
        components: {
            'wordle-panel': httpVueLoader('./wordle-panel.vue'),
            'enter': httpVueLoader('./enter.vue'),
        },
        methods: {
            setValue(value) {
                if (this.anser.length >= 5) {
                    return
                }
                this.anser.push(value)
            },
            backspace() {
                this.anser.pop()
            },
            enter() {
                if (this.anser.length != 5) {
                    return
                }
                this.$emit('enter', this.anser)
                this.anser = []
            }
        }
    }
</script>
<style scoped>
#anserArea {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.anser {
    display: flex;
}
</style>
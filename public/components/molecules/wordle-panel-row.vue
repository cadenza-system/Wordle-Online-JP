<template>
<div id="wordle-panel-row">
    <icon :color="playerColor"></icon>
    <wordle-panel class="panel" :size="panelSize" :value="anserView[0]" :color="panelColors[0]"></wordle-panel>
    <wordle-panel class="panel" :size="panelSize" :value="anserView[1]" :color="panelColors[1]"></wordle-panel>
    <wordle-panel class="panel" :size="panelSize" :value="anserView[2]" :color="panelColors[2]"></wordle-panel>
    <wordle-panel class="panel" :size="panelSize" :value="anserView[3]" :color="panelColors[3]"></wordle-panel>
    <wordle-panel class="panel" :size="panelSize" :value="anserView[4]" :color="panelColors[4]"></wordle-panel>
</div>
</template>
<script>
    module.exports = {
        data: function(){
            return {
                anserView: [],
                panelSize: '3vw',
                panelColors: [],
                playerColor: 'white'
            }
        },
        props: ['correctAnser', 'anser'],
        components: {
            'wordle-panel': httpVueLoader('./wordle-panel.vue'),
            'icon': httpVueLoader('../atoms/icon.vue'),
        },
        methods: {
            setAnser(anser) {
                this.anserView = anser.anser
                this.setColor()

                this.playerColor = State.playerList().getPlayer(anser.sender).color
            },
            isBlank() {
                if (this.anser.length == 0) {
                    return true
                }
                return false
            },
            getClass(anserChar, index) {
                if (this.correctAnser[index] == anserChar) {
                    return 'green'
                }
                if (this.correctAnser.includes(anserChar)) {
                    return 'yellow'
                }
                return null
            },
            setColor() {
                this.anserView.forEach((char, index) => {
                    this.panelColors.push(this.getClass(char, index))
                });
            }
        },
        mounted() {
           console.log(this.anser)
            if (this.anser.anser) {
                this.anserView = this.anser.anser
                this.playerColor = State.playerList().getPlayer(this.anser.sender).color
                this.setColor()
            }
        }
    }
</script>

<style scoped>
#wordle-panel-row {
    display: flex;
    align-items: center;
}

.panel {
    margin: 0.3vw;
}
</style>
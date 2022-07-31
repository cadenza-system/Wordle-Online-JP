<template>
<div id="anserArea">
    <div class="anser">
        <wordle-panel :size="size" :value="anser[0]"></wordle-panel>
        <wordle-panel :size="size" :value="anser[1]"></wordle-panel>
        <wordle-panel :size="size" :value="anser[2]"></wordle-panel>
        <wordle-panel :size="size" :value="anser[3]"></wordle-panel>
        <wordle-panel :size="size" :value="anser[4]"></wordle-panel>
    </div>
    <button>ENTER</button>
</div>
</template>
<script>
    module.exports = {
        data: function(){
            return {
                size: '5vh',
                anser: []
            }
        },
        components: {
            'wordle-panel': httpVueLoader('./wordle-panel.vue'),
        },
        methods: {
            setValue(value) {
                if (this.anser.length >= 5) {
                    return
                }
                this.anser.push(value)
                console.log(this.anser)
            }
        }
    }
</script>
<style scoped>
#anserArea {
    display: flex;
    justify-content: space-around;

}
.anser {
    display: flex;
}
</style>
<template>
<div id="wordle-board">
    <div class="panel-row" v-for="i in limit" v-bind:key="i">
        <wordle-panel-row ref="row" :correct-anser="correctAnserArr"></wordle-panel-row>
    </div>
</div>
</template>
<script>
    module.exports = {
        data: function(){
            return {
                limit: 18,
                correctAnserArr: []
            }
        },
        props: ['correctAnser'],
        components: {
            'wordle-panel-row': httpVueLoader('../molecules/wordle-panel-row.vue'),
        },
        methods: {
            setAnser(anser) {
                let setFlg = false
                this.$refs.row.forEach(element => {
                    if (element.isBlank() && !setFlg) {
                        element.setAnser([anser[0], anser[1], anser[2], anser[3], anser[4]])
                        setFlg = true
                        return
                    }
                });
            }
        },
        mounted() {
            this.correctAnserArr = this.correctAnser.split('')
        }
    }
</script>
<style scoped>
#wordle-board {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    padding-top: 1vh;
}
</style>
<template>
<div id="wordle-board">
    <div class="panel-row" v-for="i in limit" v-bind:key="i">
        <wordle-panel-row ref="row" :correct-anser="correctAnserArr" :anser="getAnser(i - 1)"></wordle-panel-row>
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
        props: ['correctAnser', 'anserList'],
        components: {
            'wordle-panel-row': httpVueLoader('../molecules/wordle-panel-row.vue'),
        },
        methods: {
            reloadAnser(anserList) {
                for (let i = 0; i < anserList.length; i ++) {
                    this.$refs.row[i].setAnser(from[i])
                }
            },
            getAnser(index){
                if (!this.anserList) {
                    return []
                }
                return this.anserList[index] ? this.anserList[index] : []
            }
        },
        mounted() {
            this.correctAnserArr = this.correctAnser.split('')
        },
        watch: {
            anserList: function(from) {
                for (let i = 0; i < from.length; i ++) {
                    this.$refs.row[i].setAnser(from[i])
                }
            }
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
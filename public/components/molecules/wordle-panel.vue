<template>
<div id="wordle-panel">
    <div class="box" :style="style">
        {{ text }}
    </div>
</div>
</template>
<script>
    module.exports = {
        data: function(){
            return {
                text: '',
                style: {
                    width: this.size,
                    height: this.size
                }
            }
        },
        props: ['size', 'value'],
        methods: {
            setValue(value) {
                this.text = value
            },
        },
        mounted() {
            this.text = this.value
        }
    }
</script>
<style scoped>
.box {
    border-radius: 15%;
    background-color: white;
    border-width: calc(3.5vw * 8 / 100);
    border-style: solid;
    border-color: lightgray;
}
</style>
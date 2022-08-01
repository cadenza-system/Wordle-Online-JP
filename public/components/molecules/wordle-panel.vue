<template>
<div id="wordle-panel">
    <div class="box" :style="style" :class="color">
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
        props: ['size', 'value', 'color'],
        methods: {
            setValue(value) {
                this.text = value
            },
        },
        mounted() {
            this.text = this.value
        },
        watch: {
            value: function(from) {
                this.text = from
            }
        }
    }
</script>
<style scoped>
.box {
    border-radius: 15%;
    border-width: calc(3.5vw * 8 / 100);
    border-style: solid;
    border-color: lightgray;
    background-color: white;
}

.green {
    background-color: greenyellow;
}

.yellow {
    background-color: yellow;
}
</style>
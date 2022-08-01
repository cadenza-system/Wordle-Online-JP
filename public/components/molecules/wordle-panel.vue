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
                    height: this.size,
                    lineHeight: this.size
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
    border-width: calc(3.5vw * 5 / 100);
    border-style: solid;
    text-align: center;
    border-color: lightgray;
    background-color: white;
    user-select: none;
}

.green {
    background-color: greenyellow;
}

.yellow {
    background-color: yellow;
}
</style>
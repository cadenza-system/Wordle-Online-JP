<template>
<div id="wordle-panel">
    <div class="box">

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
            'wordle-panel': httpVueLoader('../molecules/wordle-panel.vue'),
        },
    }
</script>
<style scoped>
.box {
    width: 3.5vw;
    height: 3.5vw;
    border-radius: 15%;
    background-color: white;
    border-width: calc(3.5vw * 8 / 100);
    border-style: solid;
    border-color: lightgray;
}
</style>
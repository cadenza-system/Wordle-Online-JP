<template>
<div id="right-area">
    <slot></slot>
</div>
</template>
<script>
    module.exports = {
        data: function(){
            return {
            }
        },
        // components: {
        //     '': httpVueLoader(''),
        // },
    }
</script>
<style scoped>
#right-area {
    border: 2px lightgray solid;
    height: 90%;
    width: 100%;
    padding: 2vh 2vw;
}
</style>
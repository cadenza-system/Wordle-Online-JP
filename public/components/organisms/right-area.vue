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
    background-color: aquamarine;
    height: 100%;
    width: 100%;
}
</style>
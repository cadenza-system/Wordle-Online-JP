<template>
<div id="label">
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
#label {
    font-weight: bold;
}
</style>
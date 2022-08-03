<template>
<div id="modal">
    <slot></slot>
</div>
</template>
<script>
    module.exports = {
        data: function(){
            return {
            }
        },
    }
</script>
<style scoped>
#modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}
</style>
<template>
<div id="button">
    <div v-if="!image">
        <slot></slot>
    </div>
    <img :src="image">
</div>
</template>
<script>
    module.exports = {
        data: function(){
            return {
            }
        },
        props: ['image']
        // components: {
        //     '': httpVueLoader(''),
        // },
    }
</script>
<style scoped>
#button {
    background-color: whitesmoke;
    user-select: none;
    cursor: pointer;
    cursor: hand;
}

#button:active {
    background-color: lightgray;
}
</style>
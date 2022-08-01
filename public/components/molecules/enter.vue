<template>
<div id="enter" v-on:click="onClick()">
    <app-button>ENTER</app-button>
</div>
</template>
<script>
    module.exports = {
        data: function(){
            return {
            }
        },
        components: {
            'app-button': httpVueLoader('../atoms/button.vue'),
        },
        methods: {
            onClick() {
                this.$emit('click')
            }
        }
    }
</script>
<style scoped>
</style>
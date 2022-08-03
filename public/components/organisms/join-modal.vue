<template>
<div id="join-madal">
    <modal>
        <nickname-input-area @push="pushJoin" button-name="JOIN"></nickname-input-area>
    </modal>
</div>
</template>
<script>
    module.exports = {
        data: function(){
            return {
            }
        },
        components: {
            'modal': httpVueLoader('../atoms/modal.vue'),
            'nickname-input-area': httpVueLoader('../organisms/nickname-input-area.vue'),
        },
        methods: {
            pushJoin(nickname) {
                this.$emit('join', nickname)
            }
        }
    }
</script>
<style scoped>
</style>
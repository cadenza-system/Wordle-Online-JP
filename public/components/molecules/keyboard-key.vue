<template>
<div id="keyboard-key">
    <button>
        {{ text }}
    </button>
</div>
</template>
<script>
    module.exports = {
        data: function(){
            return {
                text:'',
            }
        },
        components: {
            'wordle-panel-row': httpVueLoader('../molecules/wordle-panel-row.vue'),
        },
        props: ['value'],
        created: function(){
            if (!this.value) {
                this.text = '　'
                return
            }

            this.text = this.value
        }
    }
</script>
<style scoped>
button {
    background-color: white;
    width: 2.5vw;
    height: 2.5vw;
    border-radius: 15%;
}
</style>
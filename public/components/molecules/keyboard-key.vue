<template>
<div id="keyboard-key" @click="onclick()" :class="{'blank': isBlank()}">
    {{ text }}
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
        methods: {
            onclick() {
                if (this.isBlank()) {
                    return
                }
                this.$emit('push', this.text)
            },
            isBlank() {
                return this.text == '　'
            }
        },
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
#keyboard-key {
    background-color: white;
    width: 2.3vw;
    height: 2.3vw;
    border-radius: 15%;
    user-select: none;
    cursor: pointer;
    cursor: hand;
}

.blank {
    cursor: default !important;
    opacity: 0;
}
</style>
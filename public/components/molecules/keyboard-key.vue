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
            'label': httpVueLoader('../atoms/label.vue'),
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
    background-color: whitesmoke;
    width: 2.3vw;
    height: 2.6vw;
    border-radius: 15%;
    user-select: none;
    cursor: pointer;
    cursor: hand;
    text-align: center;
    line-height: 2.6vw;
    font-weight: bold;
}

.blank {
    cursor: default !important;
    opacity: 0;
}
</style>
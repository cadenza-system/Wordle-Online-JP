<template>
<div id="toggle-button" v-bind:style="style">
    <div class="button" v-bind:class="{'on': !toggled, 'off': toggled}" v-on:click="clickLeft()">{{ textLeft }}</div>
    <div class="button" v-bind:class="{'on': toggled, 'off': !toggled}" v-on:click="clickRight()">{{ textRight }}</div>
</div>
</template>
<script>
    module.exports = {
        data: function(){
            return {
                toggled: false,
                style: {
                    width: this.width
                }
            }
        },
        components: {
            'wordle-panel-row': httpVueLoader('../molecules/wordle-panel-row.vue'),
        },
        props: ['text-left', 'text-right', 'width'],
        methods: {
            clickLeft: function() {
                if(this.toggled) {
                    this.toggled = false
                }
            },
            clickRight: function() {
                if(!this.toggled) {
                    this.toggled = true
                }
            }
        }
    }
</script>
<style scoped>
#toggle-button {
    display: flex;
    user-select: none;
    cursor: pointer;
    cursor: hand;
    width: v-bind(width);
}

.button {
    width: 50%;
    text-align: center;
}

.on {
    background-color: lightgray;
}

.off {
    background-color: white;
}
</style>
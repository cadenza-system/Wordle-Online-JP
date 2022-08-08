<template>
<div id="button">
    <div class="text" :class="clazz" v-if="!image">
        <slot></slot>
    </div>
    <img :src="image">
</div>
</template>
<script>
    module.exports = {
        data: function(){
            return {
                clazz: ""
            }
        },
        props: {
            disabled: {
                type: Boolean,
                default: false,
                required: false
            },
            image: {
                type: String,
                default: null,
                required: false
            }
        },
        mounted () {
            if (this.disabled) {
                this.clazz = 'disabled'
            } else {
                this.clazz = 'enabled'
            }
        }
        // components: {
        //     '': httpVueLoader(''),
        // },
    }
</script>
<style scoped>

#button {
    user-select: none;
}
.enabled {
    background-color: whitesmoke;
    cursor: pointer;
    cursor: hand;
}

.enabled:active {
    background-color: lightgray;
}

.disabled {
    background-color: lightgray;
}

.text {
    text-align: center;
}

</style>
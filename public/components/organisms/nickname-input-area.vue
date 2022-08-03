<template>
<div id="nickname-input-area">
    <div class="content">
    <div class="inner-content">
        <div class="nickname-wrapper">
            <label for="nickname">
                ENTER YOUR NICKNAME
            </label>
            <div id="nickname">
                <input type="text" v-model="nickname">
            </div>
        </div>
        <div>
            <button @click="push()">{{ buttonName }}</button>
        </div>
    </div>
</div>
</div>
</template>
<script>
    module.exports = {
        data: function(){
            return {
                nickname:''
            }
        },
        props: ['buttonName'],
        methods: {
            push() {
                this.$emit('push', this.nickname)
            }
        }
    }
</script>
<style scoped>
.content {
    display: flex;
    justify-content: center;
}
.inner-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30vw;
    border-style: solid;
    border-width: 5px;
    border-color: lightgray;
    margin-top: 4vh;
    height: 40vh;
    justify-content: space-around;
    background-color: whitesmoke;
}

.nickname-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
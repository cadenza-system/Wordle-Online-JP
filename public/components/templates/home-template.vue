<template>
    <div id="home">
        <app-header></app-header>
        <div class="content">
            <div class="inner-content">
                <div class="nickname-wrapper">
                    <label for="nickname">
                        ENTER YOUR NICKNAME
                    </label>
                    <div id="nickname">
                        <input type="text">
                    </div>
                </div>
                <div>
                    <button @click="createRoom()">CREATE ROOM</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    module.exports = {
        data: function(){
            return {
            }
        },
        components: {
            'app-header': httpVueLoader('../organisms/header.vue'),
        },
        methods: {
            createRoom() {
                console.log(State.state)
                this.$router.push('/game?room-id=')
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

input {

}
</style>
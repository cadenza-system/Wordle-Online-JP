<template>
<div id="app">
        <router-view></router-view>
    <!-- <game></game> -->
</div>
</template>
<script>
    module.exports = {
        components: {
            'game': httpVueLoader('./pages/game.vue'),
        },
    }
</script>
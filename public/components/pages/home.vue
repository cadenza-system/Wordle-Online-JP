<template>
    <div id="home">
        <home-template></home-template>
    </div>
</template>
<script>
    module.exports = {
        data: function(){
            return {
            }
        },
        components: {
            'home-template': httpVueLoader('../templates/home-template.vue'),
        },
    }
</script>

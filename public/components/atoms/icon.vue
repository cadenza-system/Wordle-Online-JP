<template>
<div id="icon" :style="style">
</div>
</template>
<script>
    module.exports = {
        data: function(){
            return {
                style: {
                    backgroundColor: this.color
                }
            }
        },
        props: ['color']
        ,
        watch: {
            color: function(from) {
                this.style = {
                    backgroundColor: from
                }
                
            }
        }
    }
</script>
<style scoped>
#icon {
    width: 1.8vw;
    height: 1.8vw;
    border-radius: 50%;
    border-style: solid;
    border-width: 2px;
    border-color: lightgray;
}
</style>
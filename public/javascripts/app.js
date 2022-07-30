let app = new Vue({
    el: '#app',
    components: {
        'App': httpVueLoader('./components/app.vue'),
    },
});
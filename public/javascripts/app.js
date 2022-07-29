var app = new Vue({
    el: '#app',
    components: {
        'app': httpVueLoader('./components/app.vue'),
    },
});
const routes = [
    { path: '/', component: httpVueLoader('./components/pages/home.vue') },
    { path: '/game', component: httpVueLoader('./components/pages/game.vue') },
];

const router = new VueRouter({ routes });

let app = new Vue({
    el: '#app',
    router,
    components: {
        'App': httpVueLoader('./components/app.vue'),
    },
});
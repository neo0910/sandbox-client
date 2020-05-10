import Vue from 'vue';
import VueRouter from 'vue-router';
import Unsplash from 'unsplash-js';
import 'tachyons/css/tachyons.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/assets/css/styles.css';

import App from './components/App';
import router from './routes';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueRouter);

window.axios = require('axios');

if (typeof process.env.APP_BASE_API !== 'undefined') {
    window.axios.defaults.baseURL = process.env.APP_BASE_API;
} else {
    alert('APP_BASE_API not defined, create .env file!');
}

Vue.prototype.$unsplash = new Unsplash({
    accessKey: process.env.APP_UNSPLASH_ACCESS_KEY,
    secret: process.env.APP_UNSPLASH_SECRET_KEY,
});

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store,
});

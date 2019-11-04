import Vue from 'vue';
import VueRouter from 'vue-router';
import Unsplash from 'unsplash-js';
import 'tachyons/css/tachyons.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/assets/css/styles.css';

Vue.config.productionTip = false;
Vue.use(VueRouter);

window.axios = require('axios');

if (typeof process.env.VUE_APP_BASE_API !== 'undefined') {
    window.axios.defaults.baseURL = process.env.VUE_APP_BASE_API;
} else {
    alert('VUE_APP_BASE_API not defined, create .env file!');
}

Vue.prototype.$unsplash = new Unsplash({
    accessKey: process.env.VUE_APP_UNSPLASH_ACCESS_KEY,
    secret: process.env.VUE_APP_UNSPLASH_SECRET_KEY,
});

import store from '@/store';
import router from '@/routes';
import App from '@/App';

new Vue({
    store,
    render: h => h(App),
    router,
}).$mount('#app');

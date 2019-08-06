import Vue from 'vue';
import 'tachyons/css/tachyons.min.css';
import '@/assets/css/styles.css';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

window.axios = require('axios');

if (typeof process.env.VUE_APP_BASE_API !== 'undefined') {
    window.axios.defaults.baseURL = process.env.VUE_APP_BASE_API;
} else {
    alert('VUE_APP_BASE_API not defined, create .env file!');
}

import store from './store';
import router from './routes';
import App from './App';

Vue.config.productionTip = false;

new Vue({
    store,
    render: h => h(App),
    router,
}).$mount('#app');

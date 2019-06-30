import Vue from 'vue';

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
Vue.use(VueMaterial);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

window.axios = require('axios');

if (typeof process.env.VUE_APP_BASE_API !== 'undefined') {
    window.axios.defaults.baseURL = process.env.VUE_APP_BASE_API;
    console.log('AXIOS base url: ' + process.env.VUE_APP_BASE_API);
} else {
    alert('VUE_APP_BASE_API not defined, create .env file!');
}

import store from './store';
import router from './routes';
import App from './App';

Vue.prototype.$isMobile = window.screen.availWidth <= 600;
Vue.config.productionTip = false;

new Vue({
    store,
    render: h => h(App),
    router,
}).$mount('#app');

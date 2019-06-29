import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.config.productionTip = false;

window.axios = require('axios');

if (typeof process.env.VUE_APP_BASE_API !== 'undefined') {
    window.axios.defaults.baseURL = process.env.VUE_APP_BASE_API;
    console.log('AXIOS base url: ' + process.env.VUE_APP_BASE_API);
} else {
    alert('VUE_APP_BASE_API not defined, create .env file!');
}

Vue.use(VueRouter);
Vue.use(VueMaterial);

import store from './store';
import router from './routes';
import App from './App';

new Vue({
    store,
    render: h => h(App),
    router,
}).$mount('#app');

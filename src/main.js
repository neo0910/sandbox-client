import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { MdButton } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import App from './App.vue';

Vue.config.productionTip = false;

window.axios = require('axios');

if (typeof process.env.VUE_APP_BASE_API !== 'undefined') {
    window.axios.defaults.baseURL = process.env.VUE_APP_BASE_API;
    console.log('AXIOS base url: ' + process.env.VUE_APP_BASE_API);
} else {
    alert('VUE_APP_BASE_API not defined, create .env file!');
}

Vue.use(VueRouter);

Vue.use(Vuex);
import store from './store';

Vue.use(MdButton);

new Vue({
    store,
    render: h => h(App),
}).$mount('#app');

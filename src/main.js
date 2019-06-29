import Vue from 'vue';
import { MdButton } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import App from './App.vue';

Vue.config.productionTip = false;

window.axios = require('axios');

console.log(process.env.VUE_APP_BASE_API);

Vue.use(MdButton);

new Vue({
    render: h => h(App),
}).$mount('#app');

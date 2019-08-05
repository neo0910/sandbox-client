import Vue from 'vue';
import Vuex from 'vuex';
import myCounter from './modules/myCounter';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        myCounter,
    },
    state: {
        
    },
    getters: {
        
    },
    mutations: {

    },
});

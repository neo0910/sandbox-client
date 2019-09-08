import Vue from 'vue';
import Vuex from 'vuex';
import myCounter from '@/store/modules/myCounter';
import todos from '@/store/modules/todos';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        myCounter,
        todos,
    },
    state: {
        
    },
    getters: {
        
    },
    mutations: {

    },
});

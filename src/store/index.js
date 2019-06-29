import Vue from 'vue';
import Vuex from 'vuex';
import myCounter from './modules/myCounter';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        myCounter,
    },
    state: {
        sidebarStatus: true,
    },
    getters: {
        getSidebarStatus: state => state.sidebarStatus,
    },
    mutations: {
        toggleSidebar: state => state.sidebarStatus = !state.sidebarStatus,
    },
});

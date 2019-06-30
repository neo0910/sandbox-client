import Vue from 'vue';
import Vuex from 'vuex';
import myCounter from './modules/myCounter';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        myCounter,
    },
    state: {
        sidebarStatus: false,
    },
    getters: {
        getSidebarStatus: state => state.sidebarStatus,
    },
    mutations: {
        toggleSidebar: (state, payload) => {
            if (typeof payload !== 'undefined') {
                state.sidebarStatus = payload;
            } else {
                state.sidebarStatus = !state.sidebarStatus;
            }
        },
    },
});

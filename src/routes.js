import VueRouter from 'vue-router';

import MyCounter from './components/MyCounter';

const routes = [
    {
        path: '/',
        name: 'home',
    },
    {
        path: '/my-counter',
        name: 'myCounter',
        components: {
            myCounter: MyCounter,
        },
    },
];

const router = new VueRouter({ routes });

export default router;

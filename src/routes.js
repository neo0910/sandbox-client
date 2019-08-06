import VueRouter from 'vue-router';

import MyCounter from './components/MyCounter';
import Bio from '@/components/Bio';

const routes = [
    {
        path: '/',
        name: 'home',
    },
    {
        path: '/bio',
        name: 'Bio',
        components: {
            Bio,
        },
    },
    {
        path: '/my-counter',
        name: 'myCounter',
        components: {
            MyCounter,
        },
    },
];

const router = new VueRouter({ routes });

export default router;

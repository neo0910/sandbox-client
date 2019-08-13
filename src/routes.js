import VueRouter from 'vue-router';

import MyCounter from '@/components/MyCounter';
import Bio from '@/components/Bio';
import TodoList from '@/components/TodoList';

const routes = [
    { path: '/', name: 'home' },
    { path: '/bio', component: Bio },
    { path: '/my-counter', component: MyCounter },
    { path: '/todo-list', component: TodoList },
];

const router = new VueRouter({ routes });

export default router;

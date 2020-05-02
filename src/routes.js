import VueRouter from 'vue-router';

import Bio from '@/components/Bio';
import TodoList from '@/components/TodoList';
import SearchImages from '@/components/SearchImages';
import Clock from '@/components/Clock';

const routes = [
    {path: '/', name: 'home'},
    {path: '/bio', component: Bio},
    {path: '/todo-list', component: TodoList},
    {path: '/search-images', component: SearchImages},
    {path: '/clock', component: Clock},
];

const router = new VueRouter({ routes });

export default router;

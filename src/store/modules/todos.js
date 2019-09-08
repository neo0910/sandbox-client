const _cloneDeep = require('lodash.clonedeep');

const todos = {
    state: {
        todos: [],
    },
    getters: {
        getTodos: state => state.todos,
    },
    mutations: {
        setTodos: (state, todos) => state.todos = todos,
    },
    actions: {
        async fetchTodos ({ commit }) {
            try {
                const res = await axios.get('todos');
                commit('setTodos', res.data);
            } catch (e) {
                throw new Error(e);
            }
        },
        async addTodo ({ getters, commit }, text) {
            const todos = _cloneDeep(getters.getTodos);

            try {
                const res = await axios.post('todos', { text });
                todos.push(res.data);
                commit('setTodos', todos);
            } catch (e) {
                throw new Error(e);
            }
        },
        async deleteTodo ({ getters, commit }, id) {
            const todos = _cloneDeep(getters.getTodos);

            try {
                await axios.delete(`todos/${id}`);
                commit('setTodos', todos.filter(el => el._id !== id));
            } catch (e) {
                throw new Error(e);
            }
        },
        async updateTodo ({ getters, commit }, todo) {
            const todos = _cloneDeep(getters.getTodos);

            try {
                const res = await axios.put(`todos/${todo._id}`, todo);
                console.log(res);
            } catch (e) {
                throw new Error(e);
            }
        },
    },
};

export default todos;
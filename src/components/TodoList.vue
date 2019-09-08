<template>
    <div class="pa4-l">
        <form
            class="bg-dark-gray mw7 center pa4 br2-ns green"
            @submit.prevent="add"
        >
            <fieldset class="cf bn ma0 pa0">
                <legend class="pa0 f5 f4-ns mb3">Create to-do item form</legend>
                <div class="cf">
                    <label
                        class="clip"
                        for="email-address"
                    >
                        To-do item
                    </label>
                    <input
                        ref="todoInput"
                        v-model.trim="todo"
                        class="f6 f5-l input-reset bn fl bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
                        name="todo-input"
                        placeholder="To-do item"
                        type="text"
                    >
                    <button
                        class="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-green white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
                        type="button"
                        @click="add"
                        v-html="'Add'"
                    />
                </div>
            </fieldset>
        </form>

        <div class="mw7 center">
            <article
                v-for="(todo, i) in getTodos"
                :key="todo._id"
                class="br2 hidden b--black-10 ma4 relative"
            >
                <i
                    class="far fa-edit absolute pointer white todo__edit-button"
                    @click="update(todo)"
                />

                <button
                    class="bn rotate-45 absolute pointer outline-transparent bg-transparent todo__remove-button"
                    @click="remove(todo._id)"
                />

                <h1
                    class="f4 bg-green br2 br--top black mv0 pv2 ph3"
                    v-html="`Todo ${i}`"
                />

                <div class="pa3 bg-dark-gray br2 br--bottom">
                    <textarea
                        :ref="`todoText${todo._id}`"
                        v-model="todo.text"
                        :class="todoTextClasses(todo._id)"
                        :readonly="isTodoActive(todo._id)"
                    />
                </div>
            </article>
        </div>
    </div>
</template>

<script>

    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: 'TodoList',
        data: () => ({
            todo: '',
            todoForUpdate: null,
        }),
        computed: {
            ...mapGetters([
                'getTodos',
            ]),
        },
        async created () {
            try {
                await this.fetchTodos();
            } catch (e) {
                console.dir(e);
            }
        },
        methods: {
            ...mapActions([
                'fetchTodos',
                'addTodo',
                'deleteTodo',
                'updateTodo',
            ]),
            isTodoActive (id) {
                return this.todoForUpdate === id;
            },
            todoTextClasses (id) {
                return {
                    'f6 f5-ns lh-copy b--transparent br2-ns w-100 todo__text': true,
                    'todo__text_active': this.isTodoActive(id),
                };
            },
            async add () {
                if (!this.todo) {
                    this.$refs.todoInput.focus();
                    return;
                }
                
                try {
                    await this.addTodo(this.todo);
                } catch (e) {
                    console.dir(e);
                }

                this.todo = '';
            },
            async remove (id) {
                try {
                    await this.deleteTodo(id);
                } catch (e) {
                    console.dir(e);
                }
            },
            async update (todo) {
                if (!this.todoForUpdate) {
                    this.todoForUpdate = todo._id;
                    this.$refs[`todoText${todo._id}`][0].focus();
                    return;
                }

                this.todoForUpdate = null;

                try {
                    await this.updateTodo(todo);
                } catch (e) {
                    console.dir(e);
                }
            },
        },
    };

</script>

<style scoped>

    .todo__text {
        outline: transparent;
        resize: none;
        /* pointer-events: none; */
    }

    .todo__text > .todo__text_active {
        /* pointer-events: auto; */
    }

    .todo__remove-button {
        height: 16px;
        right: 10px;
        top: 10px;
        width: 16px;
    }

    .todo__edit-button {
        right: 32px;
        top: 10px;
    }

    .todo__remove-button:before {
        background-color: white;
        content: '';
        height: 2px;
        left: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
    }

    .todo__remove-button:after {
        background-color: white;
        content: '';
        height: 100%;
        left: 50%;
        position: absolute;
        top: 0;
        transform: translateX(-50%);
        width: 2px;
    }

</style>

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

        <div class="mw7 center relative todo-list__container">
            <article
                v-for="(todo, i) in getTodos"
                :key="todo._id"
                class="br2 hidden b--black-10 ma4 relative"
            >
                <i
                    class="far fa-edit absolute pointer white todo__edit-button"
                    @click="update(todo)"
                />
                
                <i
                    class="fas fa-times absolute pointer white todo__remove-button"
                    @click="remove(todo)"
                />

                <h1
                    class="f4 bg-green br2 br--top black mv0 pv2 ph3"
                    v-html="`Todo ${i}`"
                />

                <div class="pa3 bg-dark-gray br2 br--bottom">
                    <input
                        :ref="`todoInput${todo._id}`"
                        v-model="todo.text"
                        :class="todoInputClasses(todo._id)"
                        :readonly="!isTodoActive(todo._id)"
                        type="text"
                        @keypress.enter="update(todo)"
                    >
                </div>
            </article>
            <transition
                v-if="todoListLoading"
                appear
                mode="out-in"
                name="fade"
            >
                <i
                    key="icon-loader"
                    class="fas fa-biohazard fa-2x fa-spin dark-gray"
                />
            </transition>
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
            todoListLoading: false,
        }),
        computed: {
            ...mapGetters([
                'getTodos',
            ]),
        },
        async created () {
            this.todoListLoading = true;

            try {
                await this.fetchTodos();
            } catch (e) {
                console.dir(e);
            }

            this.todoListLoading = false;
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
            todoInputClasses (id) {
                return {
                    'f6 f5-ns lh-copy pa2 br2-ns w-100 white bg-transparent ba b--transparent': true,
                    'todo__text': true,
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
            async remove (todo) {
                try {
                    await this.deleteTodo(todo._id);
                } catch (e) {
                    console.dir(e);
                }
            },
            async update (todo) {
                if (!this.todoForUpdate) {
                    this.todoForUpdate = todo._id;
                    this.$refs[`todoInput${todo._id}`][0].focus();
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

    .todo-list__container {
        min-height: 50vh;
    }

    .todo-list__container > i {
        left: calc(50% - 18px);
        position: absolute;
        top: calc(50% - 16px);
    }

    .todo__text {
        outline: transparent;
    }

    .todo__text.todo__text_active {
        border: 1px solid #19a974;
    }

    .todo__edit-button {
        right: 32px;
        top: 10px;
    }

    .todo__remove-button {
        font-size: 18px;
        right: 10px;
        top: 10px;
    }

    .fade-enter-active {
        animation: fade .5s;
    }

    .fade-leave-active {
        animation: fade .25s reverse;
    }

    @keyframes fade {
        0% {
            opacity: 0;
        }
        
        100% {
            opacity: 1;
        }
    }

</style>

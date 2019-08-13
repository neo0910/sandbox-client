<template>
    <div class="pa4-l">
        <form
            class="bg-dark-gray mw7 center pa4 br2-ns green"
            @submit.prevent="addTodo"
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
                        @click="addTodo"
                        v-html="'Add'"
                    />
                </div>
            </fieldset>
        </form>

        <div class="mw7 center">
            <article
                v-for="(todo, i) in todoList"
                :key="i"
                class="br2 hidden b--black-10 ma4 relative"
            >
                <button
                    class="bn rotate-45 absolute pointer outline-transparent bg-transparent todo__remove-button"
                    @click="removeTodo(i)"
                />

                <h1
                    class="f4 bg-green br2 br--top black mv0 pv2 ph3"
                    v-html="`Todo ${i}`"
                />

                <div class="pa3 white bg-dark-gray br2 br--bottom">
                    <p class="f6 f5-ns lh-copy">
                        {{ todo }}
                    </p>
                </div>
            </article>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'TodoList',
        data: () => ({
            todo: '',
            todoList: [],
        }),
        computed: {
            
        },
        methods: {
            addTodo () {
                this.todo
                    ? this.todoList.push(this.todo)
                    : this.$refs.todoInput.focus();

                this.todo = '';
            },
            removeTodo (i) {
                this.todoList.splice(i, 1);
            },
        },
    };

</script>

<style scoped>

    .todo__remove-button {
        height: 16px;
        right: 10px;
        top: 10px;
        width: 16px;
    }

    .todo__remove-button:before {
        background-color: white;
        content: '';
        height: 1px;
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
        width: 1px;
    }

</style>

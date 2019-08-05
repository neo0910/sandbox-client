<template>
    <h1>{{ component }}</h1>
</template>

<script>

    import { mapGetters, mapMutations } from 'vuex';

    export default {
        name: 'MyCounter',
        data: () => ({
            component: 'My counter'
        }),
        computed: {
            ...mapGetters([
                'getCounter',
            ]),
        },
        methods: {
            ...mapMutations([
                'incrementCounter',
                'decrementCounter',
                'resetCounter',
            ]),
            counterHandler (e) {
                switch (e) {
                    case 'increment':
                        this.incrementCounter();
                        break;
                    case 'decrement':
                        this.decrementCounter();
                        break;
                }
            }
        },
    };

</script>

<style scoped>

</style>

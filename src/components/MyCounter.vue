<template>
    <div class="md-layout">
        <div class="md-layout-item">
            <md-button
                class="md-raised md-primary"
                @click="incrementCounter"
            >
                Increment
            </md-button>
    
            <div>Current Count: {{ getCounter }}</div>

            <md-button
                class="md-raised md-primary"
                @click="decrementCounter"
            >
                Decrement
            </md-button>

            <md-button
                class="md-raised md-primary"
                @click="resetCounter"
            >
                Reset Counter
            </md-button>
        </div>
    </div>
</template>

<script>

    import { mapGetters, mapMutations } from 'vuex';

    export default {
        name: 'MyCounter',
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
        }
    };

</script>

<style scoped>

</style>

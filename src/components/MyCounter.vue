<template>
    <div class="md-layout">
        <div class="md-layout-item">
            <md-card md-with-hover>
                <md-card-header>
                    Simple Counter
                </md-card-header>

                <md-card-content>
                    Current Count:

                    <span v-html="getCounter" />

                    <md-button
                        class="md-icon-button"
                        @click="resetCounter"
                    >
                        <md-icon>close</md-icon>
                    </md-button>
                </md-card-content>

                <md-card-actions>
                    <md-button
                        class="md-icon-button md-primary"
                        @click="counterHandler('increment')"
                    >
                        <md-icon class="md-size-2x">arrow_upward</md-icon>
                    </md-button>

                    <md-button
                        class="md-icon-button md-accent"
                        @click="counterHandler('decrement')"
                    >
                        <md-icon class="md-size-2x">arrow_downward</md-icon>
                    </md-button>
                </md-card-actions>
            </md-card>
        </div>

        <md-snackbar
            :md-active.sync="tooltipActive"
            :md-duration="3000"
            md-position="center"
            md-persistent
        >
            <span>Chill out! Better try to decrement)</span>

            <md-button
                class="md-primary"
                @click="counterHandler('decrement')"
            >
                Decrement
            </md-button>
        </md-snackbar>
    </div>
</template>

<script>

    import { mapGetters, mapMutations } from 'vuex';

    export default {
        name: 'MyCounter',
        data: () => ({
            tooltipActive: false,
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

                this.tooltipActive = e !== 'decrement' && this.getCounter > 30 ? true : false;
            }
        },
    };

</script>

<style scoped>

    .md-layout {
        align-content: center;
        min-height: 100vh;
    }

    .md-layout-item {
        display: flex;
        justify-content: center;
    }

    .md-card {
        display: flex;
        font-family: 'Roboto Mono', monospace;
        flex-flow: column nowrap;
        font-weight: bold;
        height: 350px;
        justify-content: space-around;
        width: 80%;
    }

    .md-card-header {
        font-size: 2rem;
        line-height: 2rem;
        text-align: center;
    }

    .md-card-content {
        font-size: 1.5rem;
        line-height: 40px;
        text-align: center;
    }

    .md-card-content span {
        font-size: 44px;
        margin: 0 8px 0 16px;
    }

    .md-card-actions {
        justify-content: center;
    }

    .md-card-actions .md-icon-button {
        height: 80px;
        min-width: 80px;
        height: 80px;
    }

    @media screen and (min-width: 600px) {
        .md-card {
            width: 400px;
        }
    }

</style>

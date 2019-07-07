<template>
    <div class="md-app">
        <md-drawer
            md-swipeable
            md-persistent="full"
            :md-active.sync="sidebar"
        >
            <md-toolbar
                class="md-transparent"
                md-elevation="0"
            >
                <span class="md-title">Navigation</span>
            </md-toolbar>

            <md-list>
                <md-list-item
                    v-for="app in navigationConfigs"
                    :key="app.name"
                    md-expand
                    :md-expanded.sync="app.expand"
                >
                    <md-icon>control_point</md-icon>

                    <h4
                        @click.stop="$router.push(app.route)"
                        v-html="app.name"
                    />

                    <md-list slot="md-expand">
                        <md-list-item
                            v-for="item in app.support"
                            :key="item"
                            class="md-inset"
                        >
                            {{ item }}
                        </md-list-item>
                    </md-list>
                </md-list-item>
            </md-list>
        </md-drawer>

        <md-content>
            <router-view name="myCounter" />
        </md-content>

        <md-button
            :class="backButtonClasses"
            :to="{ name: 'home' }"
        >
            <md-icon class="md-size-2x">arrow_back</md-icon>
        </md-button>
    </div>
</template>

<script>

    import { mapGetters, mapMutations } from 'vuex';

    export default {
        name: 'App',
        data: () => ({
            navigationConfigs: [
                {
                    expand: false,
                    name: 'Simple Counter',
                    route: { name: 'myCounter' },
                    support: [ 'Vuex' ],
                },
            ],
        }),
        computed: {
            ...mapGetters([
                'getSidebarStatus',
            ]),
            sidebar: {
                get () {
                    return this.getSidebarStatus;
                },
                set () {
                    this.toggleSidebar();
                },
            },
            backButtonClasses () {
                return {
                    'md-icon-button': true,
                    'md-icon-button__show': this.$route.name !== 'home',
                };
            },
        },
        watch: {
            $route () {
                this.toggleDrawerByRoute();
            },
        },
        async created () {
            this.toggleDrawerByRoute();
            const res = await axios.get('/social-networks');
        },
        methods: {
            ...mapMutations([
                'toggleSidebar',
            ]),
            toggleDrawerByRoute () {
                this.$route.name === 'home' && !this.$isMobile
                    ? this.toggleSidebar(true)
                    : this.toggleSidebar(false);
            },
        },
    };

</script>

<style scoped>

    .md-app {
        font-family: 'Roboto Mono', monospace;
        height: 100vh;
    }

    .md-drawer {
        max-width: calc(100vw - 100px);
        width: 320px;
    }

    .md-content {
        background-color: var(--content-background-color);
        flex: 1 1 100%;
    }

    .md-list-item-content {
        justify-content: flex-start;
    }

    .md-list-item-content h4 {
        flex: 1 1 100%;
        font-size: 1rem;
    }

    .md-list-item-content h4:hover {
        text-decoration: underline;
    }

    .md-icon-button {
        bottom: .5rem;
        position: fixed;
        right: .5rem;
        width: 80px;
        min-width: 80px;
        height: 80px;
        opacity: 0;
        transform: scale(.75);
        transition: .25s ease all;
    }

    .md-icon-button__show {
        opacity: 1;
        transform: scale(1);
    }

</style>

<template>
    <div class="md-app">
        <md-drawer
            md-swipeable
            md-persistent="full"
            :md-active.sync="sidebar"
        >
            <md-list>
                <md-list-item>
                    <router-link :to="{ name: 'myCounter' }">
                        Перейти к myCounter
                    </router-link>
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
        created () {
            this.toggleDrawerByRoute();
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
        height: 100vh;
    }

    .md-content {
        flex: 1 1 100%;
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

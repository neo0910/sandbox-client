<template>
    <div class="md-app">
        <md-drawer
            md-swipeable
            md-permanent="full"
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

        <router-view name="myCounter" />
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
        },
        methods: {
            ...mapMutations([
                'toggleSidebar',
            ]),
        },
    };

</script>

<style scoped>

    .md-app {
        height: 100vh;
    }

</style>

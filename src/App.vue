<template>
    <div id="app">
        <img
            alt="Vue logo"
            src="./assets/logo.png"
        >
        <HelloWorld :msg="getTitle" />
    </div>
</template>

<script>

    import { mapGetters } from 'vuex';
    import HelloWorld from './components/HelloWorld.vue';

    export default {
        name: 'App',
        components: {
            HelloWorld,
        },
        computed: {
            ...mapGetters([
                'getTitle',
            ]),
        }
    };

</script>

<style>

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

</style>

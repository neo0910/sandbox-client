<template>
    <div id="app">
        <img
            alt="Vue logo"
            src="./assets/logo.png"
        >
        <MyCounter />
    </div>
</template>

<script>

    import MyCounter from './components/MyCounter.vue';

    export default {
        name: 'App',
        components: {
            MyCounter,
        },
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

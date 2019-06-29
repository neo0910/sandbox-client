<template>
    <div id="app">
        <img
            alt="Vue logo"
            src="./assets/logo.png"
        >

        <router-link :to="{ name: 'myCounter' }">Перейти к myCounter</router-link>

        <router-view name="myCounter" />
    </div>
</template>

<script>

    export default {
        name: 'App',
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

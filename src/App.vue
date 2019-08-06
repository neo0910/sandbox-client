<template>
    <div class="mid-gray bg-washed-blue min-vh-100 flex justify-center">
        <router-view name="Bio">
            <bio />
        </router-view>
    </div>
</template>

<script>

    import Bio from '@/components/Bio';

    export default {
        name: 'App',
        components: {
            Bio,
        },
        data: () => ({
            hello: 'Hello, this is my page!'
        }),
    };

</script>

<style scoped>

</style>

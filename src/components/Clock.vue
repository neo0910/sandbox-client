<template>
    <div class="bg-near-black relative min-vh-100">
        <h1 class="clock b dark-green absolute" />
    </div>
</template>

<script>
    import startTicking from '@/helpers/clock';
    export default {
        name: 'Clock',
        data: () => ({
            startTicking: startTicking,
        }),
        mounted () {
            this.startTicking(document.querySelector('.clock'));
        },
    };

</script>

<style scoped>
    .clock {
        font-size: 8rem;
        left: 50%;
        margin: 0;
        top: 50%;
        transform: translate(-50%, -50%);
    }
</style>

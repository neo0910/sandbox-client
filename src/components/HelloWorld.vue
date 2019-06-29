<template>
    <div>
        <md-button class="md-raised md-primary">
            {{ msg }}
        </md-button>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

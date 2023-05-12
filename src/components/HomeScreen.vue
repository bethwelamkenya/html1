<template>
    <section>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
    </section>
</template>

<script>
export default {
    name: "HomeScreen",
    data() {
        return {
            parent: null,
        }
    },
    created() {
        this.parent = this.$parent
    },
    methods: {
        navigateToOther() {
            this.parent.changePage(this.parent.services)
        },
    },
}
</script>

<style scoped>

</style>
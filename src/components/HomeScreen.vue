<template>
    <NavBarView :active="active"></NavBarView>
    <main id="main-body" ref="mainBody">
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
        <FooterView></FooterView>
    </main>
</template>

<script>
import NavBarView from "@/components/views/NavBarView.vue";
import FooterView from "@/components/views/FooterView.vue";

export default {
    name: "HomeScreen",
    components: {
        NavBarView,
        FooterView,
    },
    data() {
        return {
            active: "home",
            mainBody: null
        }
    },
    created() {
        this.mainBody = this.$refs.mainBody
    },
    methods: {
    },
}
</script>

<style scoped>

</style>
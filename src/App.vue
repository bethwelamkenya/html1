<script setup>
</script>

<template>
<!--    <NavBarView></NavBarView>-->
    <main id="main-body" >
        <HomeScreen></HomeScreen>
        <FooterView></FooterView>
    </main>
</template>
<script>

import HomeScreen from "@/components/HomeScreen.vue";
import FooterView from "@/components/views/FooterView.vue";
import NavBarView from "@/components/views/NavBarView.vue";

export default {
    components: {
        NavBarView,
        HomeScreen,
        FooterView,
    },
    data() {
        return {
        }
    },
    mounted() {
    },
    methods: {
    }
}
</script>
<style scoped>
</style>

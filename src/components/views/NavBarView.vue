<template>

    <nav ref="navBar">
        <div>
            <Menu @click="toggleNavBar" class="img"></Menu>
            <a href="../../../index.html" ref="home">
                <Home class="img"></Home>
                <span>Home</span></a>
            <a href="../../../services.html" ref="services">
                <Services class="img"></Services>
                <span>Services</span></a>
            <a href="../../../recordings.html" ref="recordings">
                <Audio class="img"></Audio>
                <span>Recordings</span></a>
        </div>
        <div class="nav-footer">
            <a href="#" @click="toggleDarkMode">
                <component :is="darkModeOn" class="img" id="themeIcon"></component>
                <span>{{ modeText }}</span>
            </a>
            <a href="#" ref="settings">
                <Settings class="img"></Settings>
                <span>Settings</span></a>
            <a href="#" ref="accounts">
                <Account class="img"></Account>
                <span>Account</span></a>
            <a href="#" ref="about">
                <About class="img"></About>
                <span>About</span></a>
            <a href="#" ref="members">
                <Group class="img last-footer"></Group>
                <span>Members</span></a>
        </div>
    </nav>
</template>

<script>
import Group from "@/components/icons/group.vue";
import Audio from "@/components/icons/audio.vue";
import Account from "@/components/icons/account.vue";
import About from "@/components/icons/about.vue";
import Menu from "@/components/icons/menu.vue";
import Services from "@/components/icons/services.vue";
import Settings from "@/components/icons/settings.vue";
import Home from "@/components/icons/home.vue";
import HomeScreen from "@/components/HomeScreen.vue";
import ServicesScreen from "@/components/ServicesScreen.vue";
import RecordingsScreen from "@/components/RecordingsScreen.vue";
import AccountsScreen from "@/components/AccountsScreen.vue";
import MembersScreen from "@/components/MembersScreen.vue";
import Dark from "@/components/icons/dark.vue";
import Light from "@/components/icons/light.vue";

export default {
    name: "NavBarView",
    props: {
        active: {
            type: String,
            required: true
        },
        // body: {
        //     type: String,
        //     required: true,
        // }
    },
    components: {
        Home,
        Settings,
        Services,
        Menu,
        About,
        Account,
        Audio,
        Group
    },
    data() {
        return {
            parent: null,
            darkModeOn: "light",
            isDarkMode: false,
            modeText: "Light",
            currentPage: HomeScreen,
            home: null,
            services: null,
            recordings: null,
            accounts: null,
            members: null,
            mainBody: null,
            navBar: null,
            themeIcon: null,
        }
    },
    mounted() {
        this.parent = this.$parent
        this.navBar = this.$refs.navBar
        this.mainBody = this.parent.mainBody
        // this.mainBody = this.body
        // this.mainBody = this.$refs.mainBody
        this.home = this.$refs.home
        this.services = this.$refs.services
        this.recordings = this.$refs.recordings
        this.members = this.$refs.members
        this.accounts = this.$refs.accounts
        this.themeIcon = this.$refs.themeIcon
        this.continueFunctions()
        console.log(this.active)
        if (this.active === "home"){
            this.home.classList.add("activeSpans")
            this.services.classList.remove("activeSpans")
            this.recordings.classList.remove("activeSpans")
            this.accounts.classList.remove("activeSpans")
            this.members.classList.remove("activeSpans")
        } else if (this.active === "services"){
            this.home.classList.remove("activeSpans")
            this.services.classList.add("activeSpans")
            this.recordings.classList.remove("activeSpans")
            this.accounts.classList.remove("activeSpans")
            this.members.classList.remove("activeSpans")
        } else if (this.active === "recordings"){
            this.home.classList.remove("activeSpans")
            this.services.classList.remove("activeSpans")
            this.recordings.classList.add("activeSpans")
            this.accounts.classList.remove("activeSpans")
            this.members.classList.remove("activeSpans")
        } else if (this.active === "accounts"){
            this.home.classList.remove("activeSpans")
            this.services.classList.remove("activeSpans")
            this.recordings.classList.remove("activeSpans")
            this.accounts.classList.add("activeSpans")
            this.members.classList.remove("activeSpans")
        } else if (this.active === "members"){
            this.home.classList.remove("activeSpans")
            this.services.classList.remove("activeSpans")
            this.recordings.classList.remove("activeSpans")
            this.accounts.classList.remove("activeSpans")
            this.members.classList.add("activeSpans")
        } else {
            this.home.classList.remove("activeSpans")
            this.services.classList.remove("activeSpans")
            this.recordings.classList.remove("activeSpans")
            this.accounts.classList.remove("activeSpans")
            this.members.classList.remove("activeSpans")
        }
    },
    methods: {
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode
            document.documentElement.classList.toggle('dark-mode', this.isDarkMode)
            this.continueFunctions()
        },
        toggleNavBar() {
            this.navBar.classList.toggle("active");
            this.mainBody.classList.toggle("active");
            this.continueFunctions()
        },
        continueFunctions() {
            if (this.isDarkMode) {
                this.modeText = "Dark"
                this.darkModeOn = Dark
            } else {
                this.darkModeOn = Light
                this.modeText = "Light"
            }
        },
        changePage(page) {
            if (page === this.home) {
                this.home.classList.add("activeSpans")
                this.services.classList.remove("activeSpans")
                this.recordings.classList.remove("activeSpans")
                this.accounts.classList.remove("activeSpans")
                this.members.classList.remove("activeSpans")
                this.currentPage = HomeScreen
            } else if (page === this.services) {
                this.home.classList.remove("activeSpans")
                this.services.classList.add("activeSpans")
                this.recordings.classList.remove("activeSpans")
                this.accounts.classList.remove("activeSpans")
                this.members.classList.remove("activeSpans")
                this.currentPage = ServicesScreen
            } else if (page === this.recordings) {
                this.home.classList.remove("activeSpans")
                this.services.classList.remove("activeSpans")
                this.recordings.classList.add("activeSpans")
                this.accounts.classList.remove("activeSpans")
                this.members.classList.remove("activeSpans")
                this.currentPage = RecordingsScreen
            } else if (page === this.accounts) {
                this.home.classList.remove("activeSpans")
                this.services.classList.remove("activeSpans")
                this.recordings.classList.remove("activeSpans")
                this.accounts.classList.add("activeSpans")
                this.members.classList.remove("activeSpans")
                this.currentPage = AccountsScreen
            } else if (page === this.members) {
                this.home.classList.remove("activeSpans")
                this.services.classList.remove("activeSpans")
                this.recordings.classList.remove("activeSpans")
                this.accounts.classList.remove("activeSpans")
                this.members.classList.add("activeSpans")
                this.currentPage = MembersScreen
            }
        },
    },
}
</script>

<style scoped>
#themeIcon {
    transform: rotateZ(-45deg);
}
</style>
<script setup>
import Facebook from "@/components/icons/facebook.vue";
import Linkedin from "@/components/icons/linkedin.vue";
import Gmail from "@/components/icons/gmail.vue";
import Account from "@/components/icons/account.vue";
import Home from "@/components/icons/home.vue";
import Menu from "@/components/icons/menu.vue";
import Services from "@/components/icons/services.vue";
import Audio from "@/components/icons/audio.vue";
import Settings from "@/components/icons/settings.vue";
import About from "@/components/icons/about.vue";
import Group from "@/components/icons/group.vue";
import Domain from "@/components/icons/domain.vue";
import Twitter from "@/components/icons/twitter.vue";
import Instagram from "@/components/icons/instagram.vue";
import Phone from "@/components/icons/phone.vue";
import Maps from "@/components/icons/maps.vue";
import Arrow_right from "@/components/icons/arrow_right.vue";
</script>

<template>
    <nav ref="navBar">
        <div>
            <Menu @click="toggleNavBar" class="img"></Menu>
            <a href="#" @click="changePage(home)" ref="home">
                <Home class="img"></Home>
                <span>Home</span></a>
            <a href="#" @click="changePage(services)" ref="services">
                <Services class="img"></Services>
                <span>Services</span></a>
            <a href="#" @click="changePage(recordings)" ref="recordings">
                <Audio class="img"></Audio>
                <span>Recordings</span></a>
        </div>
        <div class="nav-footer">
            <a href="#" @click="toggleDarkMode" :id="change_mode">
                <component :is="darkModeOn" class="img" id="themeIcon"></component>
                <span>{{ modeText }}</span>
            </a>
            <a href="#" ref="settings">
                <Settings class="img"></Settings>
                <span>Settings</span></a>
            <a href="#" ref="accounts" @click="changePage(accounts)">
                <Account class="img"></Account>
                <span>Account</span></a>
            <a href="#" ref="about">
                <About class="img"></About>
                <span>About</span></a>
            <a href="#" ref="members" @click="changePage(members)">
                <Group class="img last-footer"></Group>
                <span>Members</span></a>
        </div>
    </nav>

    <main id="main-body" ref="mainBody">
        <component :is="currentPage"></component>

        <!-- <footer></footer> -->

        <footer id="footer">
            <div class="box-container">
                <div>
                    <h3> Social Media</h3>
                    <p>Find our social media handles here</p>
                    <div class="share">
                        <a target="_blank" href="https://www.repentandpreparetheway.org/">
                            <Domain class="img"></Domain>
                        </a>
                        <a target="_blank" href="https://www.facebook.com/bethwelkaranja.wairimu">
                            <Facebook class="img"></Facebook>
                        </a>
                        <a target="_blank" href="https://www.twitter.com/bethwel_karanja">
                            <Twitter class="img"></Twitter>
                        </a>
                        <a target="_blank" href="https://www.instagram.com/bethwel_karanja/">
                            <Instagram class="img"></Instagram>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/bethwel-karanja-35667b207/">
                            <Linkedin class="img"></Linkedin>
                        </a>
                    </div>
                </div>

                <div class="boxes">
                    <h3>Contact Info</h3>
                    <a class="links">
                        <Phone class="img"></Phone>
                        +254713 171 848
                    </a>
                    <a target="_blank" href="mailto:karanjabethwel12598@gmail.com" class="links">
                        <i>
                            <Gmail class="img"></Gmail>
                        </i>
                        karanjabethwel12598@gmail.com
                    </a>
                    <a target="_blank"
                       href="https://www.google.com/maps/dir/0.2829029,35.2917425/Moi+University+Main+Campus+Eldoret,+Moi+University,+Kipkenyo,+Kesses+Moi+University+Road/@0.2851804,35.2904123,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x1780f5ec5a9f9d87:0x159cb96600e6f677!2m2!1d35.293861!2d0.286735"
                       class="links"><i>
                        <Maps class="img"></Maps>
                    </i> Moi University,
                        Kesses
                    </a>
                </div>

                <div class="boxes">
                    <h3>Quick Links</h3>
                    <a href="#" @click="changePage(home)" class="links">
                        <i>
                            <Arrow_right class="img"></Arrow_right>
                        </i>
                        Home
                    </a>
                    <a href="#" @click="changePage(services)" class="links">
                        <i>
                            <Arrow_right class="img"></Arrow_right>
                        </i>
                        Services
                    </a>
                    <a href="#" @click="changePage(recordings)" class="links">
                        <i>
                            <Arrow_right class="img"></Arrow_right>
                        </i>
                        Recordings
                    </a>
                </div>
                <div>
                    <h3>Newsletter</h3>
                    <label for="email">Subscribe for latest updates</label>
                    <input type="email" placeholder="Your Email" class="email" id="email" name="email">
                    <button type="submit" class="btn" id="subscribe">Subscribe</button>
                </div>

            </div>

            <div class="credit">
                Created by
                <span> Bethwel Karanja Wairimu </span>
                | All
                <a href="#" class="links"> Rights </a>
                reserved
            </div>

        </footer>
    </main>
</template>
<script>

import TheWelcome from './components/TheWelcome.vue'
import WelcomeItem from "./components/WelcomeItem.vue";
import HomeScreen from "./components/HomeScreen.vue";
import AccountsScreen from "./components/AccountsScreen.vue";
import ServicesScreen from "./components/ServicesScreen.vue";
import RecordingsScreen from "./components/RecordingsScreen.vue";
import MembersScreen from "@/components/MembersScreen.vue";
import Dark from "@/components/icons/dark.vue";
import Light from "@/components/icons/light.vue";

export default {
    components: {
        HomeScreen,
        WelcomeItem,
        TheWelcome,
        AccountsScreen,
        ServicesScreen,
        RecordingsScreen,
        MembersScreen,
        Light,
        Dark
    },
    data() {
        return {
            activePage: "home",
            darkModeOn: "light",
            isDarkMode: false,
            // modeChanger: "change_mode",
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
            isLoggedIn: 1,
        }
    },
    mounted() {
        this.navBar = this.$refs.navBar
        this.mainBody = this.$refs.mainBody
        this.home = this.$refs.home
        this.services = this.$refs.services
        this.recordings = this.$refs.recordings
        this.members = this.$refs.members
        this.accounts = this.$refs.accounts
        this.themeIcon = this.$refs.themeIcon
        this.continueFunctions()
        this.home.classList.add("activeSpans")
        this.services.classList.remove("activeSpans")
        this.recordings.classList.remove("activeSpans")
        this.accounts.classList.remove("activeSpans")
        this.members.classList.remove("activeSpans")
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
        changePage(page) {
            // alert(page)
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
        continueFunctions() {
            if (this.isDarkMode) {
                this.modeText = "Dark"
                this.darkModeOn = Dark
            } else {
                this.darkModeOn = Light
                this.modeText = "Light"
            }
        },
    }
}
</script>
<style scoped>
#themeIcon {
    transform: rotateZ(-45deg);
}
</style>

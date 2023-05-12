<script setup>
</script>

<template>
    <nav ref="navBar">
        <div>
            <img @click="toggleNavBar" :id="navbar-toggle-button" src="./assets/img/menu.svg" alt="Show Menu">
            <a href="#" @click="changePage(home)" ref="home"><img src="./assets/img/home.svg"
                                                                  alt="Show Menu"><span>Home</span></a>
            <a href="#" @click="changePage(services)" ref="services"><img src="./assets/img/services.svg"
                                                                          alt="Show Menu"><span>Services</span></a>
            <a href="#" @click="changePage(recordings)" ref="recordings"><img src="./assets/img/audio_wave.svg"
                                                                              alt="Show Menu"><span>Recordings</span></a>
        </div>
        <div class="nav-footer">
            <a href="#" @click="toggleDarkMode" :id="change_mode">
                <img ref="themeIcon" id="themeIcon" src="./assets/img/sun.svg" alt="Change Theme">
                <span>{{modeText}}</span>
            </a>
            <a href="#" ref="settings"><img src="./assets/img/settings.svg" alt="Show Menu"><span>Settings</span></a>
            <a href="#" ref="accounts" @click="changePage(accounts)"><img src="./assets/img/user.svg"
                                                                          alt="Show Menu"><span>Account</span></a>
            <a href="#" ref="about"><img src="./assets/img/about.svg" alt="Show Menu"><span>About</span></a>
            <a href="#" ref="members" @click="changePage(members)"><img src="./assets/img/user_group_man_woman.svg" alt="Show Menu"
                                         class="last-footer"><span>Members</span></a>
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
                        <a target="_blank" href="https://www.repentandpreparetheway.org/"><img
                                src="./assets/img/domain.svg" alt="website"></a>
                        <a target="_blank" href="https://www.facebook.com/bethwelkaranja.wairimu"><img
                                src="./assets/img/facebook_new.svg" alt="facebook"></a>
                        <a target="_blank" href="https://www.twitter.com/bethwel_karanja"><img
                                src="./assets/img/twitter_circled.svg" alt="twitter"></a>
                        <a target="_blank" href="https://www.instagram.com/bethwel_karanja/"><img
                                src="./assets/img/instagram_new.svg" alt="instagram"></a>
                        <a target="_blank" href="https://www.linkedin.com/in/bethwel-karanja-35667b207/"><img
                                src="./assets/img/linkedin.svg" alt="linkedin"></a>
                    </div>
                </div>

                <div class="boxes">
                    <h3>Contact Info</h3>
                    <a class="links">
                        <img src="./assets/img/phone_message.svg" alt="call us">
                        +254713 171 848
                    </a>
                    <a target="_blank" href="mailto:karanjabethwel12598@gmail.com" class="links">
                        <i><img src="./assets/img/gmail.svg" alt="mail to"></i>
                        karanjabethwel12598@gmail.com
                    </a>
                    <a target="_blank"
                       href="https://www.google.com/maps/dir/0.2829029,35.2917425/Moi+University+Main+Campus+Eldoret,+Moi+University,+Kipkenyo,+Kesses+Moi+University+Road/@0.2851804,35.2904123,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x1780f5ec5a9f9d87:0x159cb96600e6f677!2m2!1d35.293861!2d0.286735"
                       class="links"><i><img src="./assets/img/google_maps.svg" alt="location"></i> Moi University,
                        Kesses
                    </a>
                </div>

                <div class="boxes">
                    <h3>Quick Links</h3>
                    <a href="#" @click="changePage(home)" class="links">
                        <i><img src="./assets/img/circled_chevron_right.svg" alt="home"></i>
                        Home
                    </a>
                    <a href="#" @click="changePage(services)" class="links">
                        <i><img src="./assets/img/circled_chevron_right.svg" alt="services"></i>
                        Services
                    </a>
                    <a href="#" @click="changePage(recordings)" class="links">
                        <i><img src="./assets/img/circled_chevron_right.svg" alt="recordings"></i>
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

import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import WelcomeItem from "./components/WelcomeItem.vue";
import HomeScreen from "./components/HomeScreen.vue";
import AccountsScreen from "./components/AccountsScreen.vue";
import ServicesScreen from "./components/ServicesScreen.vue";
import RecordingsScreen from "./components/RecordingsScreen.vue";
import MembersScreen from "@/components/MembersScreen.vue";

export default {
    components: {
        HomeScreen,
        WelcomeItem,
        TheWelcome,
        AccountsScreen,
        ServicesScreen,
        RecordingsScreen,
        MembersScreen
    },
    data() {
        return {
            activePage: "home",
            isDarkMode: false,
            modeChanger: "change_mode",
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
                this.themeIcon.src = "src/assets/img/moon_symbol.svg"
            } else {
                this.themeIcon.src = "src/assets/img/sun.svg"
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

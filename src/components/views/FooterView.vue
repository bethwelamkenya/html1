<template>
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
                <a href="../../../index.html" class="links">
                    <i>
                        <Arrow_right class="img"></Arrow_right>
                    </i>
                    Home
                </a>
                <a href="../../../services.html" class="links">
                    <i>
                        <Arrow_right class="img"></Arrow_right>
                    </i>
                    Services
                </a>
                <a href="../../../recordings.html" class="links">
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
</template>

<script>

import Gmail from "@/components/icons/gmail.vue";
import Facebook from "@/components/icons/facebook.vue";
import Phone from "@/components/icons/phone.vue";
import Domain from "@/components/icons/domain.vue";
import Instagram from "@/components/icons/instagram.vue";
import Linkedin from "@/components/icons/linkedin.vue";
import Maps from "@/components/icons/maps.vue";
import Arrow_right from "@/components/icons/arrow_right.vue";
import Twitter from "@/components/icons/twitter.vue";

export default {
    name: "FooterView",
    components: {
        Twitter,
        Arrow_right,
        Maps,
        Linkedin,
        Instagram,
        Domain,
        Phone,
        Facebook,
        Gmail
    }
}
</script>

<style scoped>

footer {
    background: var(--color-background-nav);
}

footer .box-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
}

footer .box-container h3 {
    font-size: x-large;
}

footer .img {
    border-radius: 10px;
    margin-right: 10px;
    transition: margin-right 0.25s ease-in-out, transform 0.15s ease-in-out;
}

footer .share .img {
    height: 40px;
    width: 40px;
}

footer .share {
    display: flex;
    flex-direction: row;
}

footer .boxes .img {
    height: 20px;
    width: 20px;
}

footer .box-container a {
    display: flex;
    flex-direction: row;
    font-size: large;
    color: gray;
    text-decoration: none;
    padding: 15px 0;
}

footer .box-container a:hover .img {
    margin-right: 30px;
    transform: scale(1.2);
}

footer .box-container p {
    line-height: 1.8;
    font-size: large;
    color: gray;
    padding: 10px 0;
}

footer .box-container label {
    line-height: 1.8;
    font-size: large;
    color: gray;
    padding: 1rem 0;
}

footer .box-container input {
    width: 100%;
    margin: 10px 0;
    padding: 15px;
    border-radius: 10px;
    border: none;
    color: var(--color-text);
    background: var(--color-background-text-bg);
    font-size: larger;
}

footer .box-container button {
    font-size: x-large;
    padding: 10px;
    color: var(--color-text);
    background: var(--color-background-text-bg);
    transition: background-color 0.4s ease-in-out, border-radius 0.4s ease-in-out;
    border-radius: 10px;
}

footer .box-container button:hover {
    background: #555555;
    /*color: white;*/
    border-radius: 20px;
    cursor: pointer;
}

footer .credit {
    text-align: center;
    margin-top: 20px;
    font-size: xx-large;
}

footer .credit span {
    color: orange;
}

footer .credit a {
    text-decoration: none;
}
</style>
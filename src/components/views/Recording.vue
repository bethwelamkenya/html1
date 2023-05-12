<template>
    <div id="item">
        <h2 ref="header">{{ day }}</h2>
        <div v-for="(audio, index) in audio" :key="index" id="details">
            <h3>{{ audio.type }}</h3>
            <a href="#">{{ audio.link }}</a><br>
            <img src="../../assets/img/download_from_cloud.svg" alt="download">
            <img src="../../assets/img/circled_play.svg" alt="play">
            <img src="../../assets/img/wavy_line.svg" alt="wave line" class="audio-wave">
        </div>
    </div>

</template>
<script>
export default {
    name: "Recording",
    props: {
        day: {
            type: String,
            required: true
        },
        audio: {
            type: Array,
            link: Array,
            default: () => []
        }
    },
    mounted() {
        // const header = this.$refs.header;
        // header.textContent = this.capitalizeText(header.textContent);
    },
    methods: {
        // capitalizeText(text) {
        //     let finalText = "";
        //     for (let i = 0; i < text.length; i++) {
        //         finalText += text.charAt(i).toUpperCase()
        //     }
        //     return finalText
        // },
        // capitalizeFirstLetter(text) {
        //     return text.charAt(0).toUpperCase() + text.slice(1)
        // }
    }
}
</script>

<style scoped>

#item {
    margin: 10px 25px;
}

#item h2 {
    font-weight: bold;
    color: orange;
}

#item a {
    color: purple;
    font-style: italic;
}

#details {
    background: var(--color-background-record);
    border-radius: 15px;
    padding: 10px;
    margin: 15px 5px;
    transition: background-color 0.15s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, transform 0.25s ease-in-out, border-radius 0.25s ease-in-out;
}

#details:hover {
    box-shadow: 0 5px 5px var(--color-border-hover);
    transform: scale(1.02);
    border-radius: 25px;
    cursor: pointer;
}

#details h3 {
    font-style: normal;
    font-weight: bolder;
}

#details img {
    height: 30px;
    width: 30px;
    padding: 3px;
    border-radius: 25%;
}

#details img:hover {
    background: #888888;
    cursor: pointer;
}

#details .audio-wave {
    border-radius: 10px;
    width: calc(100% - 100px);
}

#details .audio-wave:hover {
    background: #88888800;
}
</style>
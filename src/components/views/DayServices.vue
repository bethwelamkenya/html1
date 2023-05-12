<template>
    <div id="item">
        <h2 ref="header">{{ day }}
            <!--            <slot name="day"></slot>-->
        </h2>
        <div v-for="(event, index) in events" :key="index" id="details">
            <h3>{{ event.time }}</h3>
            <p>{{ event.details }}</p>
            <div class="location">
                <p>Location: </p>
                <div></div>
                <p id="location">{{ event.location }}</p></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DayServices",
    props: {
        day: {
            type: String,
            required: true
        },
        events: {
            type: Array,
            default: () => []
        }
    },
    mounted() {
        const header = this.$refs.header;
        header.textContent = this.capitalizeText(header.textContent);
    },
    methods: {
        capitalizeText(text) {
            let finalText = "";
            for (let i = 0; i < text.length; i++) {
                finalText += text.charAt(i).toUpperCase()
            }
            return finalText
        },
        capitalizeFirstLetter(text) {
            return text.charAt(0).toUpperCase() + text.slice(1)
        }
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

#details {
    background: var(--color-background-record);
    //background: var(--color-background-nav);
    padding: 10px;
    border-radius: 15px;
    margin: 10px 0 0 0;
    transition: box-shadow 0.2s ease-in-out, transform 0.25s ease-in-out, border-radius 0.25s ease-in-out;
}

#details:hover {
    box-shadow: 0 5px 5px var(--color-border-hover);
    transform: scale(1.02);
    border-radius: 25px;
    cursor: pointer;
    /*background: var(--color-background-nav-hover);*/
}

#details h3 {
    font-weight: bold;
    font-style: normal;
}

.location {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.location div {
    width: 15px;
}

#location {
    font-style: italic;
    font-size: small;
}
</style>
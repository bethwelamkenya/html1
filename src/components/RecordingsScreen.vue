<template>
    <section id="body-content">
        <h1 class="specific-page-title">Audio Recordings</h1>
        <form class="record-search" id="record-search">
            <label for="record-date"></label>
            <input type="date" id="record-date" name="record-date">
            <button>Search</button>
        </form>
        <form @submit.prevent="addEvent" id="addEvent">
            <label for="date">Date:</label><br>
            <input ref="newDate" type="date" id="date" v-model="newEventDate" required><br>
            <label for="type">Event Type:</label><br>
            <textarea ref="newEvents" type="text" id="type" v-model="newEventType" required></textarea><br>
            <button>Add Event</button>
        </form>
        <div v-for="(audio, date) in events" :key="date">
            <Recording :audio="audio" :day="date"></Recording>
        </div>
    </section>

</template>

<script>
import Recording from "@/components/views/Recording.vue";

export default {
    name: "RecordingsScreen",
    components: {
        Recording,
    },
    data() {
        return {
            events: {},
            newEventDate: "",
            newEventType: "",
        };
    },
    methods: {
        addEvent() {
            const newDate = this.newEventDate;
            // const newDate = this.$refs.newDate.value;
            const newEvent = this.newEventType.split("\n")
            const newEvents = []
            for (let i = 0; i < newEvent.length; i++) {
                const indivEvents = newEvent[i].split(" ")
                newEvents.push(
                    {
                        type: indivEvents[0],
                        // type: newEvent[i],
                        link: indivEvents[1]
                    }
                )
                // for (let i = 0; i < indivEvents.length; i++){
                // }
            }
            this.events[newDate] = newEvents;
            this.$forceUpdate();
            this.newEventDate = ""
            this.newEventType = ""
        },
        addNewEvent() {
            if (this.newEventDate && this.newEventType) {
                if (this.events.hasOwnProperty(this.newEventDate)) {
                    this.events[this.newEventDate].push({
                        type: this.newEventType,
                    });
                } else {
                    alert("hi")
                    this.$set(this.events, this.newEventDate, [
                        {
                            type: this.newEventType,
                        },
                    ]);
                }
                this.newEventDate = "";
                this.newEventType = "";
            }
        },
    },
};
</script>

<style scoped>
.specific-page-title {
    margin-right: 100px;
}

.record-search {
    position: fixed;
    top: 0;
    right: 10px;
}

.record-search input {
    font-weight: bold;
    font-size: large;
    min-width: 150px;
}

.record-search input:hover {
    cursor: pointer;
}

#addEvent {
    background: var(--color-background-nav);
    margin-left: 20px;
}
</style>
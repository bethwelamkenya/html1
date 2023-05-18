<template>
    <NavBarView :active="active"></NavBarView>
    <main id="main-body" ref="mainBody">
        <h2 ref="isLogged">{{ loggedText }}</h2>
        <div id="members-div">
            <table id="members-table" ref="members-table">
                <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Reg No</td>
                    <td>Mobile No</td>
                    <td>School</td>
                    <td>Year</td>
                    <td>Department</td>
                    <td>Residence</td>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(members, index) in members" :key="index">
                    <td>{{ members.id }}</td>
                    <td>{{ members.name }}</td>
                    <td>{{ members.email }}</td>
                    <td>{{ members.reg_no }}</td>
                    <td>{{ members.number }}</td>
                    <td>{{ members.school }}</td>
                    <td>{{ members.year }}</td>
                    <td>{{ members.department }}</td>
                    <td>{{ members.residence }}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <FooterView></FooterView>
    </main>
</template>
<script>
import axios from 'axios';
import NavBarView from "@/components/views/NavBarView.vue";
import FooterView from "@/components/views/FooterView.vue";

export default {

    name: "MembersScreen",
    components: {
        NavBarView,
        FooterView,
    },
    data() {
        return {
            active: "members",
            mainBody: null,
            membersTable: null,
            isLogged: null,
            logged: 0,
            loggedText: '',
            members: []
        }
    },
    mounted() {
        this.mainBody = this.$refs.mainBody
        // alert(this.logged)
        this.membersTable = this.$refs["members-table"]
        this.isLogged = this.$refs["isLogged"]
        if (this.parent.isLoggedIn === 1) {
            axios.get('http://127.0.0.1:3000/data')
                // axios.get('http://localhost:3000/data')
                .then(response => {
                    this.members = response.data;
                })
                .catch(error => {
                    console.log(error);
                    alert("error " + error)
                });
            this.isLogged.classList.add('loggedIn')
            this.loggedText = ''
        } else {
            this.isLogged.classList.remove('loggedIn')
            this.loggedText = 'Log In To View Members'
        }
    },
    methods: {
    }
}
</script>

<style scoped>

#members-div {

}

#members-table {
    height: 100px;
    background: var(--color-background-nav);
    padding: 10px;
    margin: 10px;
    border-radius: 15px;
    empty-cells: hide;
}

#members-table thead td {
    font-weight: bold;
    padding: 5px;
    color: orange;
    border: 1px solid transparent;
}

#members-table tbody td {
    padding: 10px 5px;
    text-align: center;
    border: 1px solid var(--color-text);
    background: var(--color-background-nav);
    border-radius: 5px;
    transition: border-radius 0.25s ease-in-out, transform 0.25s ease-in-out, z-index 0.25s ease-in-out, border-color 0.25s ease-in-out, box-shadow 0.2s ease-in-out;
}

#members-table tbody td:hover {
    cursor: pointer;
    transform: scale(1.2);
    z-index: 1;
    border-radius: 15px;
    box-shadow: 0 5px 5px var(--color-border-hover);
}

#members-table tbody td:first-child {
    color: green;
    font-weight: bold;
}

.loggedIn {
    visibility: hidden;
}

h2 {
    font-weight: bold;
    margin-left: 20px;
}
</style>
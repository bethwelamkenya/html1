<template>
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
</template>
<script>
import axios from 'axios';

export default {

    name: "MembersScreen",
    data() {
        return {
            membersTable: null,
            members: []
        }
    },
    mounted() {
        this.membersTable = this.$refs["members-table"]
        axios.get('http://127.0.0.1:3000/data')
        // axios.get('http://localhost:3000/data')
            .then(response => {
                this.members = response.data;
            })
            .catch(error => {
                console.log(error);
                alert("error " + error)
            });
    },
    methods: {
        // populateRandomData() {
        //     const newMembers = []
        //     for (let i = 0; i < 10; i++) {
        //         newMembers.push(
        //             {
        //                 ID: i,
        //                 Name: "Bethu",
        //                 Email: "bethu@gmail.com",
        //                 RegNo: "EC/2676/21",
        //                 MobileNo: 794894938,
        //                 School: "Engineering",
        //                 Year: 3,
        //                 Department: "Media",
        //                 Residence: "Circuit"
        //             }
        //         )
        //     }
        //     this.members = [...this.members, ...newMembers]
        //     this.members.$forceUpdate
        // }
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
</style>
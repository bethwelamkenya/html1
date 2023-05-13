<template>

    <div>
        <h1 class="specific-page-title">Account Page</h1>
        <div id="forms">
<!--            <form  method="post" name="signup" id="signup" class="signup-form" action="../../databases.php">-->
            <form @submit.prevent="checkAdminDetails">
                <h2>Admin Log In</h2>
                <label for="user-name">User Name</label><br>
                <input type="text" name="user-name" id="user-name" placeholder="User Name" v-model="admin_UserName"><br>
                <label for="login-password">Password</label><br>
                <input type="password" name="login-password" id="login-password" placeholder="********"
                       v-model="admin_Password"><br>
                <button type="submit">Log In</button>
                <p>Forgot Password? <a href="#" @click="navigateToOther">Reset Password</a></p>
            </form>

            <form @submit.prevent="addAdmin">
                <h2>Admin Sign Up</h2>
                <label for="adminName">Full Name</label><br>
                <input type="text" id="adminName" v-model="adminName" placeholder="Name" required><br>
                <label for="adminEmail">Email</label><br>
                <input type="email" id="adminEmail" v-model="adminEmail" placeholder="Email"><br>
                <label for="adminNumber">Number</label><br>
                <input type="number" id="adminNumber" v-model="adminNumber" placeholder="Number"><br>
                <label for="adminUserName">User Name</label><br>
                <input type="text" id="adminUserName" v-model="adminUserName" placeholder="User Name"><br>
                <label for="adminPassword">Password</label><br>
                <input type="password" id="adminPassword" v-model="adminPassword" placeholder="Password"><br>
                <label for="adminSecurity">Security</label><br>
                <input type="text" id="adminSecurity" v-model="adminSecurity" placeholder="Security"><br>
                <label for="adminAnswer">Answer</label><br>
                <input type="password" id="adminAnswer" v-model="adminAnswer" placeholder="Answer"><br>
                <button>Add Admin</button>
            </form>

<!--            <form  method="post" name="signup" id="signup" class="signup-form" action="../../databases.php">-->
            <form @submit.prevent="addMember">
                <h2>Member Sign Up</h2>
                <label for="memberName">Full Name</label><br>
                <input type="text" id="memberName" v-model="memberName" placeholder="Name" required name="memberName"><br>
                <label for="memberEmail">Email</label><br>
                <input type="email" id="memberEmail" v-model="memberEmail" placeholder="Email" name="memberEmail"><br>
                <label for="adminNumber">Registration number</label><br>
                <input type="text" id="memberRegNo" v-model="memberRegNo" placeholder="Reg No" name="memberRegNo"><br>
                <label for="memberNumber">Number</label><br>
                <input type="number" id="memberNumber" v-model="memberNumber" placeholder="Number" name="memberNumber"><br>
                <label for="memberSchool">School</label><br>
                <input type="text" id="memberSchool" v-model="memberSchool" placeholder="School" name="memberSchool"><br>
                <label for="memberYear">Year</label><br>
                <input type="number" id="memberYear" v-model="memberYear" placeholder="Year" name="memberYear"><br>
                <label for="memberDepartment">Department</label><br>
                <input type="text" id="memberDepartment" v-model="memberDepartment" placeholder="Department" name="memberDepartment"><br>
                <label for="memberResidence">Residence</label><br>
                <input type="text" id="memberResidence" v-model="memberResidence" placeholder="Residence" name="memberResidence"><br>
                <button>Add Member</button>
            </form>

            <form @submit.prevent="checkMemberDetails">
                <h2>Member Log In</h2>
                <label for="name">Name</label><br>
                <input type="text" name="name" id="name" placeholder="Name" v-model="member_Name"><br>
                <button type="submit">Log In</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "AccountsScreen",
    data() {
        return {
            parent: null,
            adminName: "",
            adminEmail: "",
            adminNumber: "",
            adminUserName: "",
            adminPassword: "",
            adminSecurity: "",
            adminAnswer: "",
            admin_UserName: "",
            admin_Password: "",
            memberName: null,
            memberEmail: "",
            memberRegNo: "",
            memberNumber: "",
            memberSchool: "",
            memberYear: "",
            memberDepartment: "",
            memberResidence: "",
            member_Name: "",
        }
    },
    created() {
        this.parent = this.$parent
    },
    methods: {
        navigateToOther() {

            alert(this.parent)
            alert(this.parent.services)
            this.parent.changePage(this.parent.services)
        },
        addAdmin() {
            let data = {
                name: this.adminName,
                email: this.adminEmail,
                number: this.adminNumber,
                user_name: this.adminUserName,
                password: this.adminPassword,
                security: this.adminSecurity,
                answer: this.adminAnswer,
            }
            axios.post('http://127.0.0.1:3000/adminInsert', data)
                .then(response => {
                    console.log(response.data);
                    alert(response.data.message);
                })
                .catch(error => {
                    console.log(error);
                    alert('Error sending data.' + error);
                });
        },
        addMember() {
            let data = {
                name: this.memberName,
                email: this.memberEmail,
                reg_no: this.memberRegNo,
                number: this.memberNumber,
                school: this.memberSchool,
                year: this.memberYear,
                department: this.memberDepartment,
                residence: this.memberResidence,
            }
            axios.post('http://127.0.0.1:3000/memberInsert', data)
                .then(response => {
                    console.log(response.data);
                    alert(response.data.message);
                })
                .catch(error => {
                    console.log(error);
                    alert('Error sending data.' + error);
                });
        },
        checkAdminDetails() {
            let data = {
                user_name: this.admin_UserName,
                password: this.admin_Password,
            }
            axios.post('http://127.0.0.1:3000/adminDetails', data)
                .then(response => {
                    // response.data.message = response.data.message.replace('T', '')
                    // response.data.message = response.data.message.replace('T', '')
                    console.log(response.data);
                    if (response.data.message.charAt(0) === 'T') {
                        // alert('true')
                        this.parent.changePage(this.parent.home)
                    } else {
                        alert('false')
                    }
                    // let strArr = response.data.message.split(""); // convert the string to an array
                    // strArr.splice(0, 1); // delete one character at the specified index
                    // let respond = strArr.join(""); // convert the array back to a string
                    // alert(respond);
                })
                .catch(error => {
                    console.log(error);
                    alert('Error sending data.' + error);
                });
        },
        checkMemberDetails() {
            let data = {
                name: this.member_Name,
            }
            axios.post('http://127.0.0.1:3000/memberDetails', data)
                .then(response => {
                    console.log(response.data);
                    if (response.data.message.charAt(0) === 'T') {
                        alert('true')
                    } else {
                        alert('false')
                    }
                    // let strArr = response.data.message.split(""); // convert the string to an array
                    // strArr.splice(0, 1); // delete one character at the specified index
                    // let respond = strArr.join(""); // convert the array back to a string
                    // alert(respond);
                })
                .catch(error => {
                    console.log(error);
                    alert('Error sending data.' + error);
                });
        }
    },
}
</script>

<style scoped>
#forms {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
}

form {
    background: var(--color-background-nav);
    margin: 10px;
    box-shadow: 0 5px 5px #55555550;
}

form button {
    margin-top: 10px;
}
</style>
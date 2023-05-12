const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
// const CryptoJS = require('crypto-js');
const bcrypt = require('bcrypt');


const app = express();
const salt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3333,
    user: 'root',
    password: '9852',
    database: 'church'
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


app.get('/data', (req, res) => {
    const sql = 'SELECT * FROM church.member';
    connection.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({error: 'Server error'});
        }
        res.json(results);
        console.log("sent " + results.length + " members");
    });
});

app.post('/memberInsert', async (req, res) => {
    const {name, email, reg_no, number, school, year, department, residence} = req.body;
    const sql = 'INSERT INTO church.member (name, email, reg_no, number, school, year, department, residence) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [name, email, reg_no, number, school, year, department, residence];
    if (await getMemberExists(name)) {
        res.json({message: 'Member Exists'});
        return;
    }
    connection.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({error: 'Server error'});
        }
        console.log("inserted " + result.affectedRows + " row(s)");
        res.json({message: 'Member added successfully'});
    });
});

app.post('/adminInsert', async (req, res) => {
    const {name, email, number, user_name, password, security, answer} = req.body;
    const sql = 'INSERT INTO church.admin (name, email, number, user_name, password, security, answer) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const values = [name, email, number, user_name, bcrypt.hashSync(password, salt), security, bcrypt.hashSync(answer, salt)];
    if (await getAdminExists(user_name)) {
        res.json({message: 'Admin Exists'});
        return;
    }
    connection.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({error: 'Server error'});
        }
        console.log("inserted " + result.affectedRows + " row(s)");
        res.json({message: 'Admin added successfully'});
    });
});

app.post('/memberDetails', async (req, res) => {
    const {name} = req.body;
    // if (password.includes('%')){
    //     return res.status(500).json({error: 'Password put was %'});
    // }
    if (await getMemberExists(name)) {
        res.json({message: 'TDetails Correct'});
    } else {
        return res.status(500).json({error: 'FDetails Incorrect'});
    }
});

app.post('/adminDetails', async (req, res) => {
    const {user_name, password} = req.body;
    // if (password.includes('%')){
    //     return res.status(500).json({error: 'Password put was %'});
    // }
    if (await getAdminDetailsCorrect(user_name, password)) {
        res.json({message: 'TDetails Correct'});
    } else {
        return res.status(500).json({error: 'FDetails Incorrect'});
    }
});

function getAdminDetailsCorrect(user_name, enteredPassword) {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM church.admin where user_name=?';
        connection.query(sql, user_name, (err, result) => {
            if (err) {
                console.error(err);
                reject(err);
            }
            let password = "";
            if (result.length !== 0){
                password = result[0].password;
            }
            const isPasswordMatched = bcrypt.compareSync(enteredPassword, password);
            resolve(isPasswordMatched);
        });
    });
}

function getMemberExists(name) {
    return new Promise((resolve, reject) => {
        console.log(name)
        // const sql = 'SELECT * FROM church.admin where name like ?';
        const sql = 'SELECT * FROM church.admin where name=?';
        connection.query(sql, name, (err, result) => {
            if (err) {
                console.error(err);
                reject(err);
            }
            console.log(result.length);
            console.log(result.length > 0);
            resolve(result.length > 0);
        });
    });
}

function getAdminExists(user_name) {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM church.admin where user_name=?';
        connection.query(sql, user_name, (err, result) => {
            if (err) {
                console.error(err);
                reject(err);
            }
            console.log(result.length);
            console.log(result.length > 0);
            resolve(result.length > 0);
        });
    });
}

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

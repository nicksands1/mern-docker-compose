const express = require('express')
const app = express()
const mongoose = require('mongoose')
const UserModel = require('./models/Users')
const cors = require('cors')

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://admin:Barbara1@cluster0.exrbzqm.mongodb.net/mernapp?retryWrites=true&w=majority")
.then(() => console.log("Database is connected"))
.catch(err => console.log(err))
    
app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
           res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.post("/createUser", async (req, res) => {
    const user = req.body
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
});

app.listen(3001, () => {
    console.log("Server is running!")
});
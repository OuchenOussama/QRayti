const express = require('express');
const app = express();

const CryptoJS = require("react-native-crypto-js");

app.use(express.urlencoded({extended: false}));

app.set("view engine", "ejs");

var mongoose = require('mongoose');
var User = require('./Models/User');

app.get("/SignIn", async (req, res) => {
        await mongoose.connect('mongodb://localhost:27017/QRayti');
        const newUser = new User();
        newUser.collection.countDocuments({ username: req.body.username }, (ress, count) => {
        if(count == 0){
            newUser.username = req.body.username;
            newUser.password = CryptoJS.AES.encrypt(req.body.password, 'stork').toString();
            newUser.save();
            newUser.collection.insertOne(newUser, function(err, results) {
                if (err){
                    console.log(err);
                    res.send('PROBLEM');
                }
                else {
                    res.send('inserted');
                }
        });
    }
    else res.send('already exists ' + count + req.body.username + req.body.password);
});
});

app.get('/about', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send(Buffer.from(`
        <form method="GET" action="/SignIn">
        <input name="username" type="text" />
        <input name="password" type="text" />
        <input name="submit" type="submit" />
        </form>
        `));
})

app.listen(3000);
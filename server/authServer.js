const express = require('express');
const app = express();
const port = 3002;

//Mongoose requirements
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://dbUser:dbPassword@cluster0-1ibtt.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true});
const Users = require("./models/users.js");

//Body parser is for casting req.body.username and req.body.username which are objects to turn into strings
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/createUsers', (req, res) => {
        Users.findOne({username: req.body.username}, function(err, user) {
            if(!user) {
                let newUser = new Users({
                    username: req.body.username,
                    password: req.body.password
                });
        
                newUser.save(function (err) {
                    if (err) return res.status(500).send(err);
                    else return res.status(200).send('Success!');
                });
            }else {
                res.send('Username already taken.');
            }
        });
    });


app.post('/login*', (req, res) => {    
    Users.findOne( {$and:[{ username: req.body.username},{password: req.body.password}]}, function(err, user) {
        if (user) {
            return res.send(true);
        } else {
            return res.send(false);
        }
    });

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
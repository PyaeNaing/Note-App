const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000;

const noteController = require("./controllers/noteController")
// const middleware = require("./controllers/middleware")

// App config
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

let counter = 0;

// MongoDB connection
mongoose.connect("mongodb+srv://dbUser:dbPassword@cluster0-1ibtt.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true});


//middleware
// app.use(middleware);

// all note endpoint should be here
app.post('/note/createNotes', noteController.createNotes);
app.post('/note/editNotes', noteController.editNotes);
app.get('/note/getOneNote', noteController.getOneNote);
app.get('/note/getAllNotes', noteController.getAllNotes);
app.get('/note/getClient', noteController.getClient);

app.get('*', (req, res) => {
    res.send('Its working!');
});

app.listen(port,() => console.log(`Server started on port ${port}!`))





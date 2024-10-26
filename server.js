const express = require ("express");
const userRouter = require('./routes/user.route.js');
const path = require("path")

const app = express();

app.use(express.urlencoded({ extended: true})); //send data using form

//set the view engine to EJS
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public'))) //connect public files

//register the user router
app.use(userRouter);


//start the server
app.listen(4000, ()=> { 
    console.log("server started on http://localhost:4000");
});
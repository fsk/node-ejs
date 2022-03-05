const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const localStrategy = require("passport-local");
const passport = require("passport");
const user = require("./models/userModel");
const cors = require('cors');

app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());



app.set('view engine', 'ejs');
app.use(express.static('public'));


const indexRoute = require("./routes/indexRoutes");
const adminRoute = require("./routes/adminRoutes");

app.use(indexRoute);
app.use(adminRoute);


//EXPRESS SESSION
app.use(require('express-session')({
    secret: "Secret sentence",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(user.authenticate));
passport.serializeUser(user.serializeUser());
passport.serializeUser(user.deserializeUser());

//MONGOOSE CONNECT
mongoose.connect("mongodb://localhost/BlogApp", {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
})
.then(_ => console.log('Connected to DB'))
.catch(err => console.log(`Error when connect DB: ${err}`));





const server = app.listen(3000, (err) => {
    if(err) {
        console.log(`${err}`);
    }

    console.log('Server started on' + server.address().port );
})
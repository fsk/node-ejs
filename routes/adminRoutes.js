const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const passport = require("passport");

let arr = [
    {
        actionId: 1,
        actionName: "changeHomeImage",
        displayName: "Change Home Image"
    },
    {
        actionId: 2,
        actionName: "changeAboutImage",
        displayName: "Change About Image"
    },
    {
        actionId: 3,
        actionName: "changeHomeText",
        displayName: "Change About Text"
    },
    {
        actionId: 4,
        actionName: "addNewBlog",
        displayName: "Add New Blogs"
    },
    {
        actionId: 5,
        actionName: "listAllBlogs",
        displayName: "List Add Blogs"
    },
]


router.get("/admin", (req, res) => {
    res.render("admin/admin.ejs", { arr });
})

router.get("/sign", (req, res) => {
    res.render("admin/sign.ejs");
})

router.post("/sign", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/signin",
    failureMessage: "Basarisiz giris denemesi"
}), (req, res) => {

})

router.get("/signout", (req, res) => {
    req.logOut();
})

router.get("/signup", (req, res) => {
    res.render("admin/signup")
})

router.post("/signup", async (req, res) => {
    User.register(new User({ username : req.body.username }), req.body.password, function(err, user) {
        if (err) {
          console.log(err);
          return res.status(400).send(err.message + "dafsdf");
        }
    
        passport.authenticate('local')(req,res, function () {
            console.log("created new user %s", req.body.username);
          res.redirect("/");
          res.status(201).send();
        })
        
          
       
    
      });
});

module.exports = router

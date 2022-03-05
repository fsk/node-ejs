const express = require('express');

const router = express.Router();

let data = [
    {
        postTitle: "Blog Denemesi",
        postSubtitle: "Merhaba Guys",
        image: "https://cdn.pixabay.com/photo/2015/08/28/11/27/space-911785_960_720.jpg"
    },
    {
        postTitle: "Java",
        postSubtitle: "Javada Collectionlar",
        image: "https://cdn.pixabay.com/photo/2016/03/18/15/02/ufo-1265186_960_720.jpg"
    },
    {
        postTitle: "NodeJS",
        postSubtitle: "NodeJS ile blog yapimi",
        image: "https://cdn.pixabay.com/photo/2016/09/29/13/08/planet-1702788_960_720.jpg"
    },
]

router.get("/", (req, res) => {
    res.render("home.ejs", {data});
})

router.get("/about", (req, res) => {
    res.render("about");
})

router.get("/contact", (req, res) => {
    res.render("contact");
})

router.get("/cv", (req, res) => {
    res.render("cv.ejs");
})







module.exports = router
const express = require("express")
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index.ejs")
})

router.get("/about", (req, res) => {
    res.render("about.ejs")
})

router.get("/search", (req, res) => {
    res.render("search.ejs")
})

module.exports = router;
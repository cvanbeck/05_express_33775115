const express = require("express")
const router = express.Router();
const shopData = require("../config/shopData.json")

console.log(shopData)

router.get("/", (req, res) => {
    res.render("index.ejs", shopData)
})

router.get("/about", (req, res) => {
    res.render("about.ejs", shopData)
})

router.get("/search", (req, res) => {
    res.render("search.ejs", shopData)
})

module.exports = router;
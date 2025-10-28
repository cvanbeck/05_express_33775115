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

router.get("/search_result", (req, res) => {
    res.send(`You searched for ${req.query.search_text} in ${req.query.category}`);
})

router.get("/register", (req, res) =>{
    res.render("register.ejs", shopData)
})

router.post("/registered", (req, res) => {
    res.send(`Hello ${req.body.first} ${req.body.last} you are now registered, an email has been sent to ${req.body.email}`)
})

module.exports = router;
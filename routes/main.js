const express = require("express")
const router = express.Router();
const searchRouter = require("./search.js")
const shopData = require("../config/shopData.json")
const shopLocations = require("../config/shopLocations.json")
const fs = require("fs")


router.use((req, res, next) => {
    // Logger
    date = new Date().toLocaleString("en-gb")
    fs.appendFile("./logs/requests.txt", `${date} \n    IP: ${req.ip} \n    Endpoint: ${req.originalUrl}\n \n`, err => {
        if(err){
            console.log("File failed to save")
        } else {
            console.log(`File saved at ${date}`)
        }
    })
    next()
})

router.get("/", (req, res) => {
    res.render("index.ejs", {shopData})
})

router.get("/about", (req, res) => {
    res.render("about.ejs", {shopData, shopLocations})
})



router.use("/" , searchRouter)

router.get("/search_result", (req, res) => {
    res.send(`You searched for ${req.query.search_text} in ${req.query.category}`);
})

router.get("/register", (req, res) =>{
    res.render("register.ejs", {shopData})
})

router.post("/registered", (req, res) => {
    res.send(`Hello ${req.body.first} ${req.body.last} you are now registered, an email has been sent to ${req.body.email}`)
})

module.exports = router;
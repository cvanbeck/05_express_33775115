const express = require("express")
// Routers
const router = express.Router();
const searchRouter = require("./search.js")
const registerRouter = require("./register.js")
const surveyRouter = require("./survey.js")
// Data files, currently stored in a config file but a database will be used in the future
const shopData = require("../config/shopData.json")
const shopLocations = require("../config/shopLocations.json")
//Utils
const logger = require("../utils/logger.js")


// Middleware that logs incoming requests
router.use(logger)


router.get("/", (req, res) => {
    res.render("index.ejs", {shopData})
})

router.get("/about", (req, res) => {
    res.render("about.ejs", {shopData, shopLocations})
})

// These routers are more complicated so have been seperated into their own files
router.use("/", searchRouter)
router.use("/", registerRouter)
router.use("/", surveyRouter)

module.exports = router;
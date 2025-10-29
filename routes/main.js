const express = require("express")
// Routers
const router = express.Router();
const searchRouter = require("./search.js")
const registerRouter = require("./register.js")
// Data files
const shopData = require("../config/shopData.json")
const shopLocations = require("../config/shopLocations.json")
//Utils
const logger = require("../utils/logger.js")


router.use(logger)

router.get("/", (req, res) => {
    res.render("index.ejs", {shopData})
})

router.get("/about", (req, res) => {
    res.render("about.ejs", {shopData, shopLocations})
})

router.use("/", searchRouter)
router.use("/", registerRouter)


module.exports = router;
const searchRouter = require("express").Router()
const shopData = require("../config/shopData.json")
const shopLocations = require("../config/shopLocations.json")

searchRouter.get("/search", (req, res) => {
    res.render("search.ejs", {shopData, shopLocations})
})

searchRouter.get("/search_result", (req, res) => {
    res.send(`You searched for ${req.query.search_text} in ${req.query.category}`);
})


module.exports = searchRouter;
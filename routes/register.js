const registerRouter = require("express").Router()
const shopData = require("../config/shopData.json")

registerRouter.get("/register", (req, res) =>{
    res.render("register.ejs", {shopData})
})

registerRouter.post("/registered", (req, res) => {
    res.send(`Hello ${req.body.first} ${req.body.last} you are now registered, an email has been sent to ${req.body.email}`)
})

module.exports = registerRouter;
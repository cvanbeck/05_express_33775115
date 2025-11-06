const surveyRouter = require("express").Router()
const shopData = require("../config/shopData.json")


surveyRouter.get("/survey", (req, res) => {
    res.render("survey.ejs", {shopData})
})

surveyRouter.post("/survey-complete", (req, res) => {
    res.render("survey-complete.ejs", {shopData, req})
})

module.exports = surveyRouter
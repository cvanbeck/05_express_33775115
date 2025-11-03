const surveyRouter = require("express").Router()

surveyRouter.get("/survey", (req, res) => {
    res.render("survey.ejs")
})

surveyRouter.post("/survey-complete", (req, res) => {
    res.render("survey-complete.ejs", req.body)
})

module.exports = surveyRouter
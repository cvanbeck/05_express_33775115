const express = require("express")
const ejs = require("ejs")

const app = express()
const port = 8000

app.set("view engine", "ejs")

const mainRoutes = require("./routes/main")
app.use("/", mainRoutes)

app.listen(port, () => console.log(`Example app listening on port ${port}`))
const fs = require("fs")


const logger = (req, res, next) => {
    date = new Date().toLocaleString("en-gb")
    fs.appendFile("./logs/requests.txt", `${date} \n\tIP: ${req.ip} \n\tEndpoint: ${req.originalUrl}\n \n`, err => {
        if(err){
            console.log("File failed to save")
        } else {
            console.log(`File saved at ${date}`)
        }
    })
    next()
}


module.exports = logger;
const express = require("express")
const app = express()

function isBool(_) {
    return typeof _ === 'boolean'
}

app.get("/gen/:length", (req, res) => {
    const length = parseInt(req.params.length)
    if (!Number(length)) {
        res.status(400).json({"status": "error", "msg": "Length must be a number"})
    } else if (length < 6 || length > 1024) {
        res.status(400).json({"status": "error", "msg": "Length must be between 6 and 1024"})
    } else {
        let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
        let pw = ""
    
        for (let i = 0; i<length; i++) {
            pw+=characters.charAt(Math.floor(Math.random() * characters.length))
        }
        res.status(200).json({"status": "ok", "msg": pw})
    }
})

const listen = app.listen(3000, () => {
    console.log("Server started =>", `http://127.0.0.1:${listen.address().port}`)
})

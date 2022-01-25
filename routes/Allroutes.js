const express = require('express')
const path = require('path')
const router = express.Router()
const User = require('../model/dbSchema.js')
var sessionstorage = require('sessionstorage');

router.get('/', (req, res) => {
    res.render("eform", { style: "home.css" })
})


router.post('/data', async (req, res) => {

    sessionstorage.setItem("email", req.body.email)

    const emailCheck = await User.findOne({ email: req.body.email })
    if (emailCheck) return res.status(400).send("Email Already Exists")

    const user = await User.create(req.body)
    // console.log(user)
})

router.get('/data', async (req, res) => {

    var email = sessionstorage.getItem("email")
    const emailCheck = await User.findOne({ email: email })
    console.log(emailCheck)
    if (emailCheck) {
        res.render("exist", { style: "home.css" })
    }

    const result = await User.findOne({ "email": email }).lean()
    console.log(result)
    res.render("viewData", { style: "home.css", data: result })

})



module.exports = router
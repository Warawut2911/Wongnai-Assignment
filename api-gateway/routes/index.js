const express = require("express")
const router = express.Router()
const axios = require("axios")
const url = 'http://localhost:9000/trips?q='

router.all("/", (req,res) => {
    axios.get(url)
        .then((response) => {
            res.send(response.data)
        })
})
router.all("/trips", (req, res) => {
    let keyword = req.query.keyword
    let key = encodeURI(keyword)
    axios.get(url + key)
        .then ((response) => {
            res.send(response.data)
    })
    .catch((err) => {
        console.log(err.message)
    })
})

module.exports = router 
const express = require('express')
const app = express()
const routes =require('./routes')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use("/",routes)
app.use("/trips", routes) 
app.listen(8080,() => {
    console.log('api gateway is already listening on port 8080')
})
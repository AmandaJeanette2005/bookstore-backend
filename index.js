const express = require('express')
const app = express()
const port = 2005
const router = require('./routers/router')
const bodyParser = require('body-parser')
const cors = require('cors') 


app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
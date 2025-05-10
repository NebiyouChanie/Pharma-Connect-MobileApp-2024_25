
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
 
// Middlewares
app.use(cors());

app.use(express.json());

 
// Testing
app.get('/', (req, res) => {
    res.send("hello world")
})
 

const server = app.listen(process.env.PORT, () => {
    console.log("Server is listesning on port:", process.env.PORT)
})

 
 
 
// to dowmload package we have used this method 
const express = require("express")
const router = require("./router.config")

// application of express
const app = express()
//Routing config
app.use('/api/v1/' ,router);



//export express app
module.exports = app;


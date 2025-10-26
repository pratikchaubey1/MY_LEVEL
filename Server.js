const express = require('express')
require('dotenv').config()
const connectsdb = require('./Config/DB')
const connectdb = require('./Config/DB')
connectdb()
const app = express()
app.get('/',(request,response) => {
 response.send("Hello Level we are hear")

});
const port = process.env.PORT || 5000 
app.listen(port,()=> console.log(`Server on running http://localHost:${port}`)
)
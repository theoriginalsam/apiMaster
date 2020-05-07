const express = require('express')
const dotenv= require ('dotenv')

dotenv.config({path:'./config/config.env'})


const app = express()


app.get('/',(req,res)=>{
     res.json({greet :"Hellos"})
})










const PORT = process.env.PORT || 7000
const env = process.env.NODE_ENV

app.listen(PORT,console.log(`Server running on ${PORT} the API is in ${env} mode`)) 
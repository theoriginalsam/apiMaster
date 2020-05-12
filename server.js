const express = require('express')
const dotenv= require ('dotenv')
const bootcamps = require('./routes/bootcamps')
const conn = require('./config/db')
const morgan = require('morgan')

dotenv.config({path:'./config/config.env'})


const app = express()
app.use(express.json())


app.use(morgan('dev'))
conn()



app.use('/api/v1/bootcamps',bootcamps)




 










const PORT = process.env.PORT || 7000
const env = process.env.NODE_ENV

app.listen(PORT,console.log(`Server running on ${PORT} the API is in ${env} mode`)) 
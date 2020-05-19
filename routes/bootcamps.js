const express = require('express')
const app = express.Router()
const {createBootcamp,findBootcamps,findBootcamp,updateBootcamp,deleteBootcamp}=require('../controller/bootcamps')


app.route('/').get(findBootcamps).post(createBootcamp)
app.route('/:id').get(findBootcamp).put(updateBootcamp).delete(deleteBootcamp). //id to delete 




module.exports=app

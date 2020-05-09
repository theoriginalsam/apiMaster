const mongoose = require('mongoose')

const mongodb = require('mongodb')

const connection=()=>{

const con = mongoose.connect('mongodb://localhost:27017/devcampers', {useUnifiedTopology: true,useNewUrlParser: true}).then(()=>
    console.log("Connected")

).catch(err=>console.log("EROR"))

}


module.exports=connection
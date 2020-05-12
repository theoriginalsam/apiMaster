const Bootcamp = require('../models/Bootcamp')



exports.createBootcamp=async (req,res,next)=>{
    try{
    const bootnew = await Bootcamp.create(req.body);
    res.status(201).json({
        success:true,
        data:bootnew
    })
}
catch{
    res.status(400).json({
        success:'false'
    })
}
    
}


exports.findBootcamps=(req,res,next)=>{
    res.status(200).json({success:true , message:"Found"})
}


exports.findBootcamp=(req,res,next)=>{
    res.status(200).json({success:true , message:"Found a bc"})
}


exports.updateBootcamp=(req,res,next)=>{
    res.status(200).json({success:true , message:"Updated"})
}


exports.deleteBootcamp=(req,res,next)=>{
    res.status(200).json({success:true , message:"Deleted"})
}


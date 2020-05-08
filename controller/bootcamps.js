



exports.createBootcamp=(req,res,next)=>{
    res.status(200).json({success:true , message:"Got the boot camp"})
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


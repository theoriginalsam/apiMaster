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


exports.findBootcamps=async(req,res,next)=>{

    try{
         const bootfind = await Bootcamp.find();
         res.status(200).json({
             success:true,
             message:"FOund",
             data:bootfind
         })

    }catch(err){

        res.status(400).json({
            success:"false",
            message:'ID Not found  '
        })

    }

     

}


exports.findBootcamp=async(req,res,next)=>{

    try{
        const bootfind = await Bootcamp.findById(req.params.id );
        if(!bootfind){
            res.status(400).json({
                success:'false',
                message:"incorrect id"
            }) 
        res.status(200).json({
            success:true,
            message:"Found",
            data:bootfind
        })

  
        }

   }catch(err){

       res.status(400).json({
           success:"false",
           message:'Not found  '
       })

   }

}


exports.updateBootcamp=(req,res,next)=>{
    res.status(200).json({success:true , message:"Updated"})
}


exports.deleteBootcamp=(req,res,next)=>{
    res.status(200).json({success:true , message:"Deleted"})
}


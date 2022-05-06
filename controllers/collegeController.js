const jwt=require('jsonwebtoken')
const collegeModel=require('../models/collegeModel')
const internModel =require('../models/internModel')
 
const createCollege = async function(req,res){
    try{

    let college=req.body
    //console.log(college)
    if(Object.keys(college).length!=0){
        
       if(!college.name) return res.status(400).send({status:false,msg:'Name is required!'})
       if(!college.fullName) return res.status(400).send({status:false,msg:'FullName is required'}) 
       if(!college.logoLink) return res.status(400).send({status:false,msg:'LogoLink is required!'})
       let collegeCreated =await collegeModel.create(college)
       res.status(201).send({status:true,msg:'College successfully created',data:collegeCreated})
   
    }
    }
    catch(err){
        res.status(404).send({status:false,msg:err.message})

    }
}

    const getCollege = async function(req,res){

        try{
        let requestCollege=req.query.collegeName
        console.log(requestCollege)
        if(!requestCollege)
         return res.send({msg:'Plz, enter collegeName in query'})
        let collegeId = await collegeModel.findOne({name:requestCollege,isDeleted:false}).select({_id:1})
        
        if(collegeId==null) 
        return res.send({msg:"College not exist"})
                 let clgId=collegeId._id
                 //console.log(clgId)
                 let allinterns =await internModel.find({collegeId:clgId,isDeleted:false}).select({collegeId:0,isDeleted:0,createdAt:0,updatedAt:0,_v:0})
      if(allinterns.length == 0) allinterns="No Iterns"
      let collegeDetails=await collegeModel.findOne({name:requestCollege,isDeleted:false}).select({_id:0})
     
             res.send({
                status:true,
                data:{
                    "name":collegeDetails.name,
                    "fullName":collegeDetails.fullName,
                    "logoLink":collegeDetails.logoLink,
                    "interests":allinterns
                }
                })
        }
        
    
        catch(err){
            res.status(404).send({status:false,msg:err.message})
        }

 } 



module.exports.createCollege=createCollege
module.exports.getCollege=getCollege

  

const express = require('express');
const router4=express.Router();
const mongoose= require('mongoose');
const user=require("../../models/userSchema")

router4.post("/insert/",async(req,res)=>{
    try{
        //req.body={"name":"yahya","email":"yahya@gmail.com","phone":"123456791","pass":"yahya","address":"trichy"}
        res.type('json');
        //console.log(req.body)
        const m=await new user({
            name:req.body.Name,
            phone:req.body.Phone,
            email:req.body.Email,
            pass:req.body.Pass,
            address:req.body.Address,
            })
            const mS=await m.save();
         res.status(200).json(mS);
        }
        catch(err){
           res.json(err);
        }
})

router4.get("/display/",async(req,res)=>{
    try{
        //id="5fa0165849baa22985f6ab31";
        const a=await user.find().select('-pass');
         res.status(200).json(a);
    }
    catch(err){
        console.log(err);
    }
  
})
router4.get("/fetch/:id",async(req,res)=>{
    console.log(req.params.id)
    const a=await user.findOne({_id:req.params.id});
    res.status(200).json(a);
})
router4.post("/login/",async(req,res)=>{
    try{
        
        const a=await user.findOne({email:req.body.email,pass:req.body.pass}).select("-pass");
         res.status(200).json({result:true,email:a.name,address:a.address,phone:a.phone,id:a._id});
    }
    catch(err){
        res.status(200).json({result:false});
    }
  
})

router4.post("/update/",async(req,res)=>{
    
     
    try{
        const m=await user.updateOne({_id:req.body.id},{$set:{name:req.body.name,phone:req.body.phone,address:req.body.address}}).exec(function(err, leads){
            //const file=req.body.photo;
           // console.log(m);
            res.status(200).json(leads);


        })
         }
         catch(err){
             res.json(err);
         }
})

module.exports = router4;
const express = require('express');
const router5=express.Router();
const mongoose= require('mongoose');
const product=require('./productSchema');
const user=require("./userSchema");
const tempcart=require('./tempcSchema');
const orders=require('./orderSchema');


router5.post("/insert/",async(req,res)=>{
    try{
         const m=await new orders({
            customer :req.body.user,
                product:req.body.order,
                total:req.body.tot,
                address:req.body.address,
                phone:req.body.phone
            })
            const mS=await m.save();
         res.status(200).json(mS);
        }
        catch(err){
           res.json(err);
        }
})

router5.get("/display/",async(req,res)=>{
   try{
       //id="5fa0165849baa22985f6ab31";
       const a=await orders.find({status:"Pending"}).sort({created:-1}).exec();
        res.status(200).json(a);
   }
   catch(err){
       console.log(err);
   }
 
})
router5.get("/display1/",async(req,res)=>{
    try{
        //id="5fa0165849baa22985f6ab31";
        const a=await orders.find({status:{ $ne: "Pending" } }).sort({created:-1}).exec();
         res.status(200).json(a);
    }
    catch(err){
        console.log(err);
    }
  
 })

 router5.get("/display2/",async(req,res)=>{
    try{
        //id="5fa0165849baa22985f6ab31";
        const a=await orders.find({status:"Accepted"}).sort({created:-1}).exec();
         res.status(200).json(a);
    }
    catch(err){
        console.log(err);
    }
  
 })

router5.post("/update/",async(req,res)=>{
    console.log(req.body);
     
    try{
        const m=await orders.updateOne({_id:req.body.id},{$set:{status:req.body.status}}).exec(function(err, leads){
            //const file=req.body.photo;
           // console.log(m);
            res.status(200).json(leads);


        })
         }
         catch(err){
             res.json(err);
         }
})

router5.post("/order/",async(req,res)=>{
    try{
        res.type('json');
        id="5f9f8d281391c80d39038357";
        const m=await new tempcart({
            remote_ip:req.connection.remoteAddress,
            product_id:id,
            })
            const mS=await m.save();
         res.status(200).json(mS);
        }
        catch(err){
           res.json(err);
        }
})

module.exports = router5;
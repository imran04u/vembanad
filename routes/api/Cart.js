const express = require('express');
const router5=express.Router();
const mongoose= require('mongoose');
const product=require('../../models/productSchema');
const user=require("../../models/userSchema");
const tempcart=require('../../models/tempcSchema');
const orders=require('../../models/orderSchema');


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
router5.get("/display/:id",async(req,res)=>{
    try{
        
        //id="5fa0165849baa22985f6ab31";
      //  const d=await orders.find({created:{$gt:new Date(ISODate().getTime()-1000*60*1)}});
       // console.log(d);
        var r;
        const c=await orders.find({status:"Pending"});
        console.log(c.length);
        if(c.length+""==req.params.id){
            r=false;
        }
        else{
            r=true;
        }
        const a=await orders.find({status:"Pending"}).sort({created:-1}).exec();
         res.status(200).json({a:a,s:r});
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
        const a=await orders.find({status:{ $ne : "Pending" }}).sort({created:-1}).exec();
         res.status(200).json(a);
    }
    catch(err){
        console.log(err);
    }
  
 })
  router5.post("/display3/",async(req,res)=>{
    if(req.body.a==='' && req.body.b===''){
         const a=await orders.find({status:{ $ne : "Pending" }}).sort({created:-1}).exec();
         res.status(200).json(a);
    }
    else{
    var fst=new Date(req.body.a);
    var lst=new Date(req.body.b);
    lst.setDate(lst.getDate()+1);
    console.log(fst);
    try{
        //id="5fa0165849baa22985f6ab31";
        const a=await orders.find({status:{ $ne : "Pending" },created:{ $gte: fst, $lt: lst}}).sort({created:-1}).exec();
         res.status(200).json(a);
    }
    catch(err){
        console.log(err);
    }
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
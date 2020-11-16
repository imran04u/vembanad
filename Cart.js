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
            })
            const mS=await m.save();
         res.status(200).json(mS);
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
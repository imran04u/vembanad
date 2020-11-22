const express = require('express');
const router2=express.Router();
const mongoose= require('mongoose');
const cat=require('./CatSchema');
const product=require('./productSchema');
const ba64=require('ba64');
const uuid=require("uuid");
const fileUpload=require('express-fileupload');
router2.use(fileUpload());


router2.post("/insert/",async(req,res)=>{
    let id=uuid.v1();
    let way='assets/images/uploads/'+id+'.'+req.body.fname;
    try{
        res.type('json');
        console.log(req.body)
        const m=await new product({
            title:req.body.pname,
            cname:req.body.cname,
            description:req.body.description,
            price:req.body.price,
            offer_price:req.body.offer_price,
            todayspl:req.body.spl,
            path:way
            })
           // console.log(m);
            const mS=await m.save();
        //console.log(mS)
        res.status(200).json(mS);
        const file=req.body.photo;
        let paths=__dirname+'/client/public/assets/images/uploads/'+id;
        ba64.writeImage(paths,file,(err)=>{
        if(!err){
        //res.status(200).json(mS);
            }else{console.log("err:"+err)}
                    })
        }
        catch(err){
           // res.json(err);
        }
})

router2.get("/display/",async(req,res)=>{
    try{
        const a=await product.find();
       
         const b=await cat.find().exec();
         res.status(200).json({a:a,b:b});
    }
    catch(err){
        console.log(err);
    }
   
   
    
  
})

router2.get("/fetch/:id",async(req,res)=>{
    console.log(req.params.id)
    const b=await cat.find();
    const a=await product.find({_id:req.params.id});
    res.status(200).json({a:a,b:b});
})

router2.post("/update/",async(req,res)=>{
    console.log(req.body);
    let id=uuid.v1();
    var way;
    if(req.body.photo){
        console.log("not yet")
         way='assets/images/uploads/'+id+'.'+req.body.fname;
         try{
        res.type('json');
            const file=req.body.photo;
        let paths=__dirname+'/client/public/assets/images/uploads/'+id;
        ba64.writeImage(paths,file,(err)=>{
            console.log(paths);
        if(!err){
        //res.status(200).json(m);
        console.log("success")
            }else{console.log("err:"+err)}
                    })
        
        }
        catch(err){
            res.json(err);
        }
         
    }
    else{
        console.log("yet");
        way=req.body.path
    }
    const m=product.updateOne({_id:req.body.id},{$set:{title:req.body.pname,cname:req.body.cname,description:req.body.description,offer_price:req.body.offer_price,price:req.body.price,todayspl:req.body.spl,path:way}}).exec(function(err, leads){
        res.status(200).json(leads);
   })
   console.log(m);
     // try{
    //     res.type('json');
    //     const m=product.updateOne({_id:req.body.id},{$set:{title:req.body.pname,cname:req.body.cname,description:req.body.description,offer_price:req.body.offer_price,price:req.body.price,todayspl:req.body.spl,path:way}}).exec(function(err, leads){
    //         const file=req.body.photo;
    //         console.log(m);
    //     let paths=__dirname+'/client/public/assets/images/uploads/'+id;
    //     ba64.writeImage(paths,file,(err)=>{
    //         console.log(paths);
    //     if(!err){
    //     res.status(200).json(m);
    //         }else{console.log("err:"+err)}
    //                 })
            
    //         res.status(200).json(leads);


    //     })
    //     console.log(req.body.id);
        

        
    //     }
    //     catch(err){
    //         res.json(err);
    //     }
})

router2.get("/delete/:id",async(req,res)=>{
    const a=await product.deleteOne({_id:req.params.id});
    res.status(200).json(a);
})

module.exports = router2;
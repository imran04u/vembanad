const express = require('express');
const router=express.Router();
const mongoose= require('mongoose');
const user=require('../../models/adminSchema');
const cat=require('../../models/CatSchema');
const product=require('../../models/productSchema');
const ba64=require('ba64');
//import {v4 as uuidv4} from 'uuid';
const uuid=require("uuid");
const jwt=require('jsonwebtoken');
const fileUpload=require('express-fileupload');
router.use(fileUpload());

router.post("/",async(req,res)=>{
    //res.json("h");
    try{
        res.type('json');
        console.log(req.body);
        const m=await new user({
            uname:"admin",
            pass:"tvr@123",
            })
            const mS=await m.save();
        console.log(mS)
        res.json(mS);
       
    //     console.log(req.body);
    //    const a=await user.findOne({uname:req.body.uname,pass:req.body.pass}).select("-pass");
    //    console.log(a);
    //    if(a!=null){
    //        const tokens=await jwt.sign({uname:a.uname},"admin");
    //        res.header('auth',tokens).json({result:true,token:tokens})
        
    //    }
    //    else{
    //     res.json({result:false});
    //    }

        
        }
        catch(err){
            res.json(err);
        }
})
const validuser=(req,res,next)=>{
    var t=req.header('auth');
    console.log(t);
    res.t=t;
    next();
}
router.post("/cat/",async(req,res)=>{
    let id=uuid.v1();
    let way='assets/images/uploads/'+id+'.'+req.body.fname;
    //console.log(paths)
    //res.json(paths);
    try{
        //res.setHeader('Content-Type', 'text/json');
        //res.setHeader('Content-Type', 'text/html');
        res.type('json');
        const m=await new cat({
            title:req.body.cat,
            path:way
            })
            const mS=await m.save();
      //  console.log(mS)
 const c=await cat.find().sort({created:-1}).exec();
            console.log(c);
       
            res.status(200).json(mS);
        const file=req.body.photo;
        let dir=__dirname.replace("/routes/api","/");
        let paths=dir+'client/build/assets/images/uploads/'+id;
        ba64.writeImage(paths,file,(err)=>{
        if(!err){
        //res.status(200).json(mS);
            }else{console.log("err:"+err)}
                    })
        }
        catch(err){
            //res.json(err);
        }
       
       // res.send("h");
})

router.post("/catedit/",async(req,res)=>{
    console.log(req.body);
    let id=uuid.v1();
    var way;
    if(req.body.photo){
        console.log("not yet")
         way='assets/images/uploads/'+id+'.'+req.body.fname;
         try{
        res.type('json');
            const file=req.body.photo;
            let dir=__dirname.replace("/routes/api","/");
            let paths=dir+'client/build/assets/images/uploads/'+id;
            ba64.writeImage(paths,file,(err)=>{
            console.log(paths);
        if(!err){
        //res.status(200).json(m);
        console.log("success")
            }else{console.log("err:"+err)}
                    })
            
           
        //console.log(req.body.id);
        

        
        }
        catch(err){
            res.json(err);
        }
         
    }
    else{
        console.log("yet");
        way=req.body.path
    }
    const m=cat.updateOne({_id:req.body.id},{$set:{title:req.body.cat,path:way}}).exec(function(err, leads){
        res.status(200).json(leads);
    })
    
    // let way='assets/images/uploads/'+id+'.'+req.body.fname;
    // try{
    //     res.type('json');
    //     const m=cat.updateOne({_id:req.body.id},{$set:{title:req.body.cat,path:way}}).exec(function(err, leads){
    //         const file=req.body.photo;
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

router.post("/product/",async(req,res)=>{
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
            todayspl:req.body.spl,
            path:way
            })
            console.log(m);
            const mS=await m.save();
        console.log(mS)
        res.json(mS);
        const file=req.body.photo;
        let paths=__dirname+'/client/public/assets/images/uploads/'+id;
        ba64.writeImage(paths,file,(err)=>{
        if(!err){
        res.status(200).json(mS);
            }else{console.log("err:"+err)}
                    })
        }
        catch(err){
            res.json(err);
        }
})

router.get("/catd/:id",async(req,res)=>{
    console.log(req.params.id)
    const a=await cat.find({_id:req.params.id});
    res.status(200).json(a);
})

router.get("/catdisplay/",validuser,async(req,res)=>{
    jwt.verify(res.t,"admin",async(err,data)=>{
        if(err){
            res.sendStatus(403);
        }
        else{
        const a=await cat.find().sort({created:-1}).exec();
        res.status(200).json(a);
        }

    })
        
      
})

router.get("/catdel/:id",async(req,res)=>{
    const a=await cat.deleteOne({_id:req.params.id});
    res.status(200).json(a);
})


module.exports = router;

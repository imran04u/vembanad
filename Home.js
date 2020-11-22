const express = require('express');
const router3=express.Router();
const mongoose= require('mongoose');
const cat=require('./CatSchema');
const product=require('./productSchema');
const banner=require('./bannerSchema')
const ba64=require('ba64');
const uuid=require("uuid");
const fileUpload=require('express-fileupload');
router3.use(fileUpload());

router3.get('/', async(req, res)=>{
    const s=await cat.find().exec();
    const b=await banner.find().exec();
    const w=await product.find({offer_price:{$gte:1}}).exec();
    const spl=await product.find({todayspl:'true'}).sort({created:-1}).limit(3).exec();
    let d=[];
    for(let j=0;j<w.length;j++)
    {
       for(let l=0;l<s.length;l++)
       {
          if(w[j].cname==s[l].title){
             console.log(w[j].cname)
             console.log(s[l].title)
             d.push({
                 _id:w[j]._id,
                pname:w[j].title,
                cname:w[j].cname,
                price:w[j].price,
                offer_price:w[j].offer_price,
                description:w[j].description,
                p_photo:w[j].path,
                c_photo:s[l].path
             })
          }
       }
       
    }
   res.json({offer:d,b:b,t:spl});
 });
 router3.get('/menu', async(req, res)=>{
    const s=await cat.find().exec();
    const w=await product.find({offer_price:0}).exec();
    const offer=await product.find({offer_price:{$gte:1}}).exec();
    let d=[];
    for(let j=0;j<w.length;j++)
    {
       for(let l=0;l<s.length;l++)
       {
          if(w[j].cname==s[l].title){
             console.log(w[j].cname)
             console.log(s[l].title)
             d.push({
                pname:w[j].title,
                cname:w[j].cname,
                description:w[j].description,
                p_photo:w[j].path,
                c_photo:s[l].path
             })
          }
       }
       
    }
   res.json({b:d,c:s,p:w,offer:offer});
 });

 router3.post("/add_ban/",async(req,res)=>{
    let id=uuid.v1();
    let way='assets/images/uploads/'+id+'.'+req.body.fname;
    try{
        res.type('json');
        const m=await new banner({
            title:req.body.bname,
            description:req.body.description,
            link:req.body.banner_link,
            path:way
            })
            console.log(m)
            const mS=await m.save();
            console.log(mS)
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
            //res.json(err);
        }
        res.send("h");
})

router3.post("/ban_edit/",async(req,res)=>{
    console.log(req.body.id);
    let id=uuid.v1();
    let way='assets/images/uploads/'+id+'.'+req.body.fname;
    try{
        res.type('json');
        const m=banner.updateOne({_id:req.body.id},{$set:{title:req.body.title,description:req.body.description,link:req.body.link,path:way}}).exec(function(err, leads){
            const file=req.body.photo;
            console.log(m);
        let paths=__dirname+'/client/public/assets/images/uploads/'+id;
        ba64.writeImage(paths,file,(err)=>{
            console.log(paths);
        if(!err){
        res.status(200).json(m);
            }else{console.log("err:"+err)}
                    })
            
            res.status(200).json(leads);


        })
        console.log(req.body.id);
        

        
        }
        catch(err){
            res.json(err);
        }
})

router3.get('/banner', async(req, res)=>{
    const s=await banner.find();
    res.json(s);
});
router3.get("/del_ban/:id",async(req,res)=>{
    const a=await banner.deleteOne({_id:req.params.id});
    res.status(200).json(a);
})

router3.get("/fetch/:id",async(req,res)=>{
    console.log(req.params.id)
    const a=await banner.find({_id:req.params.id});
    res.status(200).json(a);
})

module.exports = router3;
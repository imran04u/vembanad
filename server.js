const express = require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
const morgan=require('morgan');
const app = express();
app.use(cors());
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}))

app.use(morgan('dev'));
const cat=require('./CatSchema');
const product=require('./productSchema');
const banner=require('./bannerSchema');
const tempcart=require('./tempcSchema');
const fs=require('fs');
//{"pname":"chc burger","cname":"burger","description":"c burger","p_photo":"assets/images/uploads/fa78ba20-1ab9-11eb-8437-d79c11763245.jpeg","c_photo":"assets/images/uploads/cb3f7e60-1ab9-11eb-8437-d79c11763245.jpeg"}
//home
app.get('/', async(req, res)=>{
   const s=await cat.find().exec();
   const w=await product.find({todayspl:'true'}).exec();
   const offer=await product.find({offer_price:{$gte:1}}).exec();
   const tempc=await tempcart.find({remote_ip:req.connection.remoteAddress})
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
   const b=await banner.find();
   res.json({d:d,b:b,offer:offer,tempc:tempc});
});
//menu
app.get('/menu', async(req, res)=>{
   const c=await cat.find().exec();
   const w=await product.find().exec();
   res.json({cat:c,pro:w});
});

app.get('/ip/', async(req, res)=>{
    try{
      fs.unlinkSync("client/public/assets/images/uploads/0d607ce0-1b46-11eb-bab5-c591102c04ac.jpeg");
      res.send("deleted");
   }
   catch(err){
      res.json(err)
   }
  
   
   
});

//offer
app.get('/menu', async(req, res)=>{
   const offer=await product.find({offer_price:{$gte:1}}).exec();
   res.json(offer);
});


const log_router=require('./login');
app.use('/login',log_router);
const home=require('./Home');
app.use('/home',home);
const userData=require('./UserData');
app.use('/user',userData);
const Cart=require('./Cart');
app.use('/cart',Cart);
const pro_router=require('./Products');
const { compile } = require('morgan');
app.use('/product',pro_router);
const PORT=process.env.PORT || 2000
app.listen(PORT,()=>console.log("server created"));

// app.use(express.static(path.join(__dirname, '../build')))
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build'))
// })

//mongo db
mongoose.set('useNewUrlParser',true);
mongoose.set('useUnifiedTopology',true);
//mongodb://localhost:27017/food
mongoose.connect('mongodb+srv://vembanad:vembanad@food.adhdx.mongodb.net/food?retryWrites=true&w=majority',(err)=>{
if(err){console.log(err.message)}
console.log('Db Connected');
});

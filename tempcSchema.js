const mongoose=require('mongoose');
const tempC = mongoose.Schema({
remote_ip :{
type:String,
required:true
},
product_id:{
type:String,
required:true
},
qty:{
    type:Number,
    required:true,
    default:1
    }

});
module.exports=mongoose.model('tempcart',tempC);
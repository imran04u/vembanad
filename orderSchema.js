const mongoose=require('mongoose');
const orderSchema = mongoose.Schema({
customer :{
type:String,
required:true
},
product:[
    {
        type: Array,
        required:[true]
    }
   
],
phone:{
    type:String,
    required:true
},
status:{
    type:String,
    default:"Pending"
},
total:{
    type:Number,
    required:true
},
address:{
    type:String,
    required:true
},
created:{
    type:Date,
    default:Date.now
}

});
module.exports=mongoose.model('order',orderSchema);
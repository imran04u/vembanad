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
total:{
    type:Number,
    required:true
},
created:{
    type:Date,
    default:Date.now
}

});
module.exports=mongoose.model('order',orderSchema);
const mongoose=require('mongoose');
const productSchema = mongoose.Schema({
title :{
type:String,
required:true
},
cname :{
    type:String,
    required:true
    },
    description :{
        type:String,
        required:true
        },
        price :{
            type:String,
            required:true
            },
            offer_price :{
                type:String,
                required:true
                },
            todayspl :{
                type:String,
                required:true
                },
path:{
type:String,
required:true
},
created:{
    type:Date,
    default:Date.now
}

});
module.exports=mongoose.model('product',productSchema);
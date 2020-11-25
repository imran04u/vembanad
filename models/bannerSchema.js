const mongoose=require('mongoose');
const bannerSchema = mongoose.Schema({
title :{
type:String,
required:true
},
    description :{
        type:String,
        required:true
        },
        link :{
            type:String,
            required:false
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
module.exports=mongoose.model('banner',bannerSchema);
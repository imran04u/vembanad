const mongoose=require('mongoose');
const CatSchema = mongoose.Schema({
title :{
type:String,
required:true
},
path:{
type:String,
required:true
}

});
module.exports=mongoose.model('catagory',CatSchema);
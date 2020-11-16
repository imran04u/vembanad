const mongoose=require('mongoose');
const adminSchema = mongoose.Schema({

uname:{
type:String,
required:true
},
pass:{
type:String,
required:true
}

});
module.exports=mongoose.model('admin_user',adminSchema);

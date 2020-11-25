const mongoose=require('mongoose');
const userSchema = mongoose.Schema({
name :{
type:String,
required:true
},
phone :{
    type:String,
    required:true
    },
    email :{
        type:String,
        required:true
        },
        pass :{
            type:String,
            required:true
            },
            address :{
                type:String,
                required:true
                },
            created:{
        type:Date,
        default:Date.now
            }

});
module.exports=mongoose.model('c_user',userSchema);
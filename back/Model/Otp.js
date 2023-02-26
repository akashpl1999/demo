const mongoose=require("mongoose")


const Otpschema=new mongoose.Schema({


    phoneNumber:{
        type:String,

    },
    otp:{
        type:Number,

    },
    expirationTime:{
        type:String
    }





})

module.exports=mongoose.model("otp", Otpschema)
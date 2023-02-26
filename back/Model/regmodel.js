const mongoose=require("mongoose")


const regmodel = new mongoose.Schema({
    

    fname:{

        type:String,
        

    },
    lname:{

        type:String,
    }, 

    email:{
        type:String,
     },

    password:{

        type:String,

    },
    otp:{
        type:Number
    }
    


})


module.exports  = mongoose.model("register",regmodel )
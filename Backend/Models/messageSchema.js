import mongoose from "mongoose";
import validator from "validator";

const messageSchema = ({
    firstName:{
        type:String,
        required:true,
        minLength:[3, "First Name contains at least 3 latters "]
    }, 
    lastName:{
        type:String,
        required:true,
        minLength:[3, "Last Name contains at least 3 latters "]
    },
        email:{
            type:String,
            required:true,
            validate: [validator.isEmail,"Please Provide a valid email"]
           
    },
    phone:{
        type:String,
        required:true,
        minLength:[10, "Phone Number contains exact  10 Digits "],
        maxLength:[10, "Phone Number contains Exact 10 Digits "]
    },
    message:{
        type:String,
        required:true,
        minLength:[10, "message  contains atLeast   10 Digits "],
       
       
},
});

  export const Message = mongoose.model("Message", messageSchema);
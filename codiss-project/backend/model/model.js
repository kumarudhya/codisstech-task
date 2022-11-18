import mongoose from "mongoose";
import Joi from "joi";
const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    emailId:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    mobileNo:{
        type:Number,
        required:true
    },

    isAdmin:{
        type:Boolean,
        default:false
    }

})
const User=mongoose.model('User',UserSchema);
export default User;

const validateCustomer= (value) => {
    const schema = Joi.object({
      name: Joi.string().min(3),
      emailId: Joi.string().required(),
      password: Joi.string().required().min(8),
      mobileNo:Joi.number().required().min(10)
    
    });
    
    const result = schema.validate(value)
  
    return result  
  };


export {validateCustomer};
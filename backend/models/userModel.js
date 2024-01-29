import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema=new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    },
    pic:{
        type: String,
        default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    },
    age:{
        type: Number
    },   
    gender:{
        type: String
    },
    blood_grp:{
        type: String
    },
    city:{
        type: String
    },
    state:{
        type: String
    },
    isAvailable:{
        type: String,
        default: "no"
    }
    },
    {
        timestamps: true
    }
    );

// Revise 100 times It's a model function
userSchema.methods.matchPassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}

const User=mongoose.model("User",userSchema);

export default User;
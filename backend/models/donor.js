import mongoose, { Schema } from "mongoose";

const donorSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Donor=mongoose.model('Donor',donorSchema);

export default Donor;
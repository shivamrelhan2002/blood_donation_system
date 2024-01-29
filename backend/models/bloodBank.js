import mongoose from "mongoose";
import bcrypt from 'bcryptjs';


const bankSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    pic: {
        type: String,
        default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    },
    address: {
        type: String
    },
    availableGroups: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    donors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Donor'
    }]
},
    {
        timestamps: true
    });


bankSchema.methods.matchPassword=async function(password){
    // console.log("Checking pass");
    return await bcrypt.compare(password,this.password);
}

const Bank = mongoose.model("Bank", bankSchema);

export default Bank;
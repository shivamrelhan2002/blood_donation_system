import User from '../models/userModel.js';
import { generateToken } from '../config/generateToken.js';
import bcrypt from 'bcryptjs';


export async function createUser(req,res){
    // console.log(req.body);
    // res.json({"message":"Data created"});

    const {name,email,password,pic}=req.body;
    if(!name || !email || !password){
        res.status(400).send("Error Occured in create user");
    }

    const userExist=await User.findOne({email});

    if(userExist){
        res.status(400).send("User ALready Existed");
    }

    const salt=await bcrypt.genSalt(10);
    const hashpassword=await bcrypt.hash(password,salt);
    // console.log(hashpassword);

    const newUser=new User({name,email,password:hashpassword,pic});
    await newUser.save();
    // console.log(newUser);

    if(newUser){
        res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            pic: newUser.pic,
            token: generateToken(newUser._id)
        });
    }
    else{
        res.status(400).send("Error occured while creating new user");
    }
}
// export async function createUser(req,res){
//     console.log(req.body);
// }

export async function loginUser(req,res){
    // console.log(req.body);
    const {email,password}=req.body;

    const user=await User.findOne({email:email});
    // console.log(user);

    if(user&&(await user.matchPassword(password))){
        if(user.age){
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                pic: user.pic,
                age: user.age,
                gender: user.gender,
                group: user.blood_grp,
                city: user.city,
                state: user.state,
                token: generateToken(user._id)
            })
        }
        else{
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                pic: user.pic,
                token: generateToken(user._id)
            })
        }
    }
    else{
        res.status(401).send("User not registered");
    }
}

export async function updateUser(req,res){
    // console.log(req.body);
    const {name,email,age,gender,group,city,state}=req.body;
    if(name||email||age||gender||group||city||state)
    {
        const updatedUser=await User.findByIdAndUpdate(req.user._id,{
            name: name,
            email: email,
            age: age,
            gender: gender,
            blood_grp: group,
            city: city,
            state: state
        },{new: true}).select("-password");
        // console.log(updatedUser);
        await updatedUser.save();
        return res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            pic: updatedUser.pic,
            age: updatedUser.age,
            gender: updatedUser.gender,
            group: updatedUser.blood_grp,
            city: updatedUser.city,
            state: updatedUser.state,
            token: generateToken(updatedUser._id)
        })
    }
    const {pic}=req.body;
    if(pic){
        const updatedUser=await User.findByIdAndUpdate(req.user._id,{
            pic: pic,
            token: generateToken(req.user._id)
        },{new:true}).select("-password");
        // console.log(updatedUser);
        return res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            pic: updatedUser.pic,
            age: updatedUser.age,
            gender: updatedUser.gender,
            group: updatedUser.blood_grp,
            city: updatedUser.city,
            state: updatedUser.state,
            token: generateToken(updatedUser._id)
        });
    }
}

export async function changePassword(req,res){
    const {password}=req.body;
    if(password){
        const salt=await bcrypt.genSalt(10);
        const hashpassword=await bcrypt.hash(password,salt);
        const user=await User.findByIdAndUpdate(req.user._id,{
            password: hashpassword
        });
        await user.save();
        res.json(user);
    }
    else{
        res.status(400).send("No Password");
    }
}
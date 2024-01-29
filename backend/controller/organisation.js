import { generateOrgToken } from '../config/generateToken.js';
import Bank from '../models/bloodBank.js';

import bcrypt from 'bcryptjs';

export async function fetchOrg(req,res){
    // console.log("Organisations");
    const organisations=await Bank.find({});
    res.status(200).json(organisations);
}

export async function createOrg(req,res){
    // console.log("Organisation created");
    const {name,email,password,pic}=req.body;

    let organisation=await Bank.findOne({email});

    if(organisation){
        res.status(200).send("Organisation already Registered");
    }

    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt);

    const newOrg=new Bank({
        name: name,
        email: email,
        password: hashedPassword,
        pic: pic
    });

    await newOrg.save();

    if(newOrg){
        res.status(200).json({
            _id: newOrg._id,
            name: newOrg.name,
            email: newOrg.email,
            pic: newOrg.pic,
            token: generateOrgToken(newOrg._id)
        })
    }
    else{
        res.status(400).send("Error while registering organisation");
    }

}

export async function loginOrg(req,res){
    // console.log("Logged in");
    const {email,password}=req.body;

    const org=await Bank.findOne({email:email});

    if(org&&(await org.matchPassword(password))){
        res.status(200).json({
            _id: org._id,
            name: org.name,
            email: org.email,
            pic: org.pic,
            token: generateOrgToken(org._id)
        })
    }
    else{
        res.status(400).send("Invalid email or password");
    }

}
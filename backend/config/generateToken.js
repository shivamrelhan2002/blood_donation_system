import jwt from 'jsonwebtoken';

const generateToken=(id)=>{
    return jwt.sign({user_id:id},"lalit",{
        expiresIn: "30d",
    });
};

const generateOrgToken=(id)=>{
    return jwt.sign({org_id:id},"lalit",{
        expiresIn: "30d",
    });
};

export {generateToken,generateOrgToken};
import jwt from 'jsonwebtoken';

const generateToken=(id)=>{
    return jwt.sign({user_id:id},"lalit",{
        expiresIn: "30d",
    });
};

export {generateToken};
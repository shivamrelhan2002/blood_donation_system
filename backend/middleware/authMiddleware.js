import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import Bank from '../models/bloodBank.js';

export async function checkAuth(req, res, next) {
        let token
        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
                try {
                        token = req.headers.authorization.slice(7);
                        const decodedUser = jwt.verify(token, "lalit");
                        req.user = await User.findById(decodedUser.user_id).select("name email pic");
                        next();
                }
                catch (err) {
                        res.send("Not Authorized");
                }
        }
        if (!token) {
                res.send("No token found");
        }
}

export async function checkOrgAuth(req, res, next) {
        let token
        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
                try {
                        token = req.headers.authorization.slice(7);
                        const decodedUser = jwt.verify(token, "lalit");
                        req.user = await Bank.findById(decodedUser.org_id).select("name email pic");
                        next();
                }
                catch (err) {
                        res.send("Org not Authorized");
                }
        }
        if (!token) {
                res.send("No org token found");
        }
}
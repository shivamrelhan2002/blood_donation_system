import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

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

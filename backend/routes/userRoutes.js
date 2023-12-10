import express from 'express';
import { createUser,loginUser, updateUser, changePassword } from '../controller/user.js';
import { checkAuth } from '../middleware/authMiddleware.js';

const router=express.Router();

router.post('/login',loginUser);

router.post('/register',createUser);

router.put('/update',checkAuth,updateUser);

router.put('/changepassword',checkAuth,changePassword);

export default router;
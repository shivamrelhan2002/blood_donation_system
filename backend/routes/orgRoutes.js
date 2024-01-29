import express, { Router } from 'express';
import { createOrg,fetchOrg,loginOrg } from '../controller/organisation.js';
const router=express.Router();

router.get("/",fetchOrg);

router.post("/register",createOrg);

router.post("/login",loginOrg);

export default router;
import express from 'express';
const app=express();
import mongoose from 'mongoose';
import cors from 'cors';
mongoose.connect('mongodb://127.0.0.1:27017/bloodDatabase')
    .then(()=>{
        console.log("Mongo Connection formed");
    })
    .catch(err=>{
        console.log("Error Occured");
        console.log(err);
    })

import userRoutes from './routes/userRoutes.js';
import orgRoutes from './routes/orgRoutes.js';



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

// Routes

app.use('/users',userRoutes);
app.use('/organisation',orgRoutes);


app.listen(3000,()=>{
    console.log("Request Listen");
})
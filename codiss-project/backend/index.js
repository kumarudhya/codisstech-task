import express from "express";
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from "dotenv";
import user from './route/route.js';
import admin from './route/videoRoute.js';

const app=express();
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());

app.use(cors());

app.use('/api/user',user);
app.use('/api/admin',admin);

mongoose.connect('mongodb://localhost:27017/users')
.then(()=>console.log('db connected'))
.catch((e)=>console.log('error'))

const port=process.env.PORT||9000

app.listen(port,()=>{console.log("server is running on port 9000")})
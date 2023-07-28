
import postRoutes from "./Routes/posts.js"
import express from "express";
import userRoutes from "./Routes/users.js"
import authRoutes from "./Routes/auth.js"
import cookieParser from "cookie-parser";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const app=require('express')()
//const app=express()

app.use(express.json())
var cors = require('cors')

app.use(cors())

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use(cookieParser())
    


app.listen(7000,()=>{
    console.log("connected");
})
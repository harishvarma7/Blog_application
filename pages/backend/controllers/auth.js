import { db } from "../db.js"
import axios from 'axios';
import { createRequire } from 'module';
import jwt from "jsonwebtoken";


const require = createRequire(import.meta.url);
var bcrypt = require('bcryptjs');
export const register= (req,res)=>{

    //Check existing user
    const q="SELECT * FROM temp WHERE email=? OR username=?"
    
    
    
    db.query(q,[req.body.email, req.body.username],(err,data)=>{
        if (err) return res.json(err)
        if (data.length) return res.status(409).json("user already exists");

        //hash the password and create a user
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password,salt);

        const q="INSERT INTO temp (username,email,password) VALUES(?)";
        const values=[
         req.body.username,
         req.body.email,
         hash,
        ]
        console.log("hi there",req.body.email,req.body.username,hash);
        db.query(q,[values],(err,data)=>{
            
           
           
           if(err) return res.json(err)
            console.log("excecuting queryy");

            console.log(res.status(200).json("User has been created")) 
        })


    })

    
}
export const login=(req,res)=>{
    //check user
    console.log(req.body.username,req.body.password);

    const q="select * from temp where username=?";
    db.query(q,[req.body.username],(err,data) => {
        if (err) return res.json(err);
        if(data.length==0) return res.status(404).json("User not found");

        //check password
        const isPasswordCorrect= bcrypt.compareSync(req.body.password,data[0].password);

        if(!isPasswordCorrect) return res.status(400).json("Wrong username or password");

        const token= jwt.sign({id:data[0].id},"jwtkey");
        const {password, ...other}=data[0];

        res.cookie("access_token",token,{httpOnly:true}).status(200).json(data[0])


    });

};
export const logout=(req,res)=>{

    res.clearCookie("access_token",{
        sameSite:"none",
        secure:true
    }).status(200).json("User has been logged out")
};
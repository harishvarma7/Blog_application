import { createRequire } from 'module';
import { login, logout, register } from '../controllers/auth.js';
const require = createRequire(import.meta.url);
import express from 'express'
const app=require('express')()

const router =express.Router()

router.post("/register",register)
router.post("/login",login)
router.post("/logout",logout)

export default router
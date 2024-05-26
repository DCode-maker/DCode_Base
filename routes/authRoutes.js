import { loginController } from "../controllers/AuthController.js";
import express from 'express'


const router  = express.Router();

// auth routes

router.get('/login',loginController)

export default router;
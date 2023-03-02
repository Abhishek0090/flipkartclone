import express, { Router } from 'express';
import { userSignup } from '../controllers/user-controllers.js';

const router = express.Router();

router.post('/signup', userSignup);




export default router;
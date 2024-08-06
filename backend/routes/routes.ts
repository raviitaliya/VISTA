import express from "express"
import { resendOTP, signup, verifyOTP,login } from '../auth/auth';

const router = express.Router();

router.post('/signup', signup);
router.post('/verify', verifyOTP);
router.post('/resendotp', resendOTP);
router.post('/login', login);



export default router;

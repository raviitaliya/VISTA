import express from "express"
import { resendOTP, signup, verifyOTP,login, adminLogin, adminSignup } from '../auth/auth';
import {getAllContent, getContent, profile,updateProfile, uploadContent} from "../user/profile";
import { authenticateToken } from "../auth/authenticateToken";

const router = express.Router();

router.post('/signup', signup);
router.post('/verify', verifyOTP);
router.post('/resendotp', resendOTP);
router.post('/login', login);
router.get('/profile', authenticateToken, profile);
router.put('/profile', authenticateToken, updateProfile);
router.post('/upload', authenticateToken, uploadContent);
router.get('/content', authenticateToken, getContent);
router.get('/allcontent', authenticateToken, getAllContent);
router.post('/adminlogin', adminLogin);
router.post('/adminSignup', adminSignup);






export default router;

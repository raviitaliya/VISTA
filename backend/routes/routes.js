import express from 'express';
import auth from '../auth/auth.js';  // Make sure this path is correct

const router = express.Router();

router.use("/auth", auth);  // Assuming you want to use auth routes under /auth path

export default router;
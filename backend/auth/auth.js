import bcrypt from "bcrypt";
import { User, OTP } from "../models/user";
import express from "express";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      name,
      username,
      email,
      password: hashedPassword,
      verified: false,
    });

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const newOTP = new OTP({
      userId: newUser._id,
      otp: otp,
      createdAt: new Date(),
    });

    // Save user and OTP
    await newUser.save();
    await newOTP.save();

    // Log OTP to console
    console.log(`OTP for ${email}: ${otp}`);

    res.status(201).json({
      message:
        "User registered. Please verify your email with the OTP sent to the console.",
      userId: newUser._id, // Optionally send the userId for frontend reference
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// export const verifyEmail = async (req, res) => {
//   try {
//     const { userId, otp } = req.body;

//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     const otpRecord = await OTP.findOne({ userId: user._id });
//     if (!otpRecord) {
//       return res.status(400).json({ message: 'OTP not found or expired' });
//     }

//     if (otpRecord.otp !== otp) {
//       return res.status(400).json({ message: 'Invalid OTP' });
//     }

//     // Verify user and remove OTP
//     user.verified = true;
//     await user.save();
//     await OTP.deleteOne({ _id: otpRecord._id });

//     res.json({ message: 'Email verified successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };

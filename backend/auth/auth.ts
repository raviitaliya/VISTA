import { Request, Response } from "express";
import { User, IUser, Verification, IVerification } from "../model/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Admin, IAdmin } from "../model/admin";

const JWT_SECRET = process.env.JWT_SECRET as string || "qwknifhweiofhweoifhweoifhweoifw";

const generateOTP = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const generateToken = (username: string, email: string): string => {
  return jwt.sign({ username, email }, JWT_SECRET, { expiresIn: '10m' });
};

const sendOTP = async (email: string, otp: string) => {
  console.log(`Sending OTP ${otp} to ${email}`);
};

const signup = async (req: Request, res: Response) => {
  try {
    const { username, name, email, password } = req.body;

    if (!username || !name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: "User with this email or username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = generateOTP();
    const token = generateToken(username, email);

    const newUser: IUser = new User({
      username,
      name,
      email,
      password: hashedPassword,
      isVerified: false
    });

    await newUser.save();
    

    const verification: IVerification = new Verification({
      email,
      otp,
      token
    });

    await verification.save();

    await sendOTP(email, otp);

    res.status(201).json({
      message: "User created successfully. Please verify your email with the OTP sent.",
      verificationToken: token
    });

  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "An error occurred during signup", error: (error instanceof Error) ? error.message : String(error) });
  }
};

const verifyOTP = async (req: Request, res: Response) => {
  try {
    const { verificationToken, otp } = req.body;

    if (!verificationToken || !otp) {
      return res.status(400).json({ message: "Verification token and OTP are required" });
    }

    let decodedToken;
    try {
      decodedToken = jwt.verify(verificationToken, JWT_SECRET) as { username: string, email: string };
    } catch (error) {
      return res.status(400).json({ message: "Invalid or expired verification token" });
    }

    const verification = await Verification.findOne({ token: verificationToken });
    if (!verification) {
      return res.status(400).json({ message: "Invalid verification token" });
    }

    if (verification.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    const user = await User.findOne({ email: decodedToken.email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.isVerified = true;
    await user.save();

    await Verification.deleteOne({ _id: verification._id });

    const token = jwt.sign(
      { userId: user._id, username: user.username },
      JWT_SECRET
    );

    res.status(200).json({
      message: "User verified successfully",
      user: {
        id: user._id,
        username: user.username,
        name: user.name,
        email: user.email
      },
      token: token
    });

  } catch (error) {
    console.error("OTP verification error:", error);
    res.status(500).json({ message: "An error occurred during OTP verification" });
  }
};

const resendOTP = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.isVerified) {
      return res.status(400).json({ message: "User is already verified" });
    }

    const otp = generateOTP();
    const token = generateToken(user.username, email);

    await Verification.findOneAndUpdate({ email }, { otp, token }, { upsert: true, new: true });

    await sendOTP(email, otp);

    res.status(200).json({
      message: "New OTP sent successfully",
      verificationToken: token
    });

  } catch (error) {
    console.error("Resend OTP error:", error);
    res.status(500).json({ message: "An error occurred while resending OTP", error: (error instanceof Error) ? error.message : String(error) });
  }
};


const login = async (req: Request, res: Response) => {
  try {
    const { usernameOrEmail, password } = req.body;

    if (!usernameOrEmail || !password) {
      return res.status(400).json({ message: "Username/Email and password are required" });
    }

    // Find the user by username or email
    const user = await User.findOne({
      $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }]
    });

    if (!user) {
      return res.status(401).json({ message: "User not exist!" });
    }

    // Check if the user is verified
    if (!user.isVerified) {
      return res.status(403).json({ message: "Please verify your email before logging in" });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password!" });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      JWT_SECRET,
    );

    // Return user info and token
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        username: user.username,
        name: user.name,
        email: user.email
      },
      token: token
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "An error occurred during login", error: (error instanceof Error) ? error.message : String(error) });
  }
};


const adminSignup = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin with this username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin: IAdmin = new Admin({
      username,
      password: hashedPassword
    });

    await newAdmin.save();

    res.status(201).json({
      message: "Admin created successfully",
      admin: {
        id: newAdmin._id,
        username: newAdmin.username
      }
    });

  } catch (error) {
    console.error("Admin signup error:", error);
    res.status(500).json({ message: "An error occurred during admin signup", error: (error instanceof Error) ? error.message : String(error) });
  }
};

  
    



const adminLogin = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).json({ message: "Admin not exist!" });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password!" });
    }

    const token = jwt.sign(
      { adminId: admin._id, username: admin.username },
      JWT_SECRET
    );

    res.status(200).json({
      message: "Login successful",
      admin: {
        id: admin._id,
        username: admin.username
      },
      token: token
    });

  } catch (error) {
    console.error("Admin login error:", error);
    res.status(500).json({ message: "An error occurred during admin login", error: (error instanceof Error) ? error.message : String(error) });
  }
};






export { signup, verifyOTP, resendOTP,login,adminLogin,adminSignup };
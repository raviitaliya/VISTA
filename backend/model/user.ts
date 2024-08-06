import mongoose, { Document, Schema } from 'mongoose';

// User Interface and Schema
export interface IUser extends Document {
  username: string;
  name: string;
  email: string;
  password: string;
  isVerified: boolean;
}

const userSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
});

export interface IVerification extends Document {
  email: string;
  otp: string;
  token: string;
  createdAt: Date;
}

const verificationSchema: Schema = new Schema({
  email: { type: String, required: true },
  otp: { type: String, required: true },
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 600 } // OTP expires in 10 minutes
});

export const User = mongoose.model<IUser>('User', userSchema);
export const Verification = mongoose.model<IVerification>('Verification', verificationSchema);
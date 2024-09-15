import mongoose, { Document, Schema } from 'mongoose';

// User Interface and Schema
export interface IUser extends Document {
  username: string;
  name: string;
  email: string;
  password: string;
  isVerified: boolean;
  avatar: string;
}

const userSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  avatar: { type: String, default: '' }
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

export interface IUpload extends Document {
  userId: mongoose.Types.ObjectId;
  title: string;
  description: string;
  img: string[];
  uploadDate: Date;
}

const uploadSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: [String], required: true },
  uploadDate: { type: Date, default: Date.now }
});

export const User = mongoose.model<IUser>('User', userSchema);
export const Verification = mongoose.model<IVerification>('Verification', verificationSchema);
export const Upload = mongoose.model<IUpload>('Upload', uploadSchema);
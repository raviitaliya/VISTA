import mongoose, { Document, Schema } from 'mongoose';

export interface IAdmin extends Document {
    username: string;
    password: string;
}

const adminSchema: Schema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

export const Admin = mongoose.model<IAdmin>('Admin', adminSchema);

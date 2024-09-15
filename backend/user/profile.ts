import { Response } from 'express';
import { User, Upload } from '../model/user';

import { RequestWithUser } from '../auth/authenticateToken'; // Import the custom type

const profile = async (req: RequestWithUser, res: Response): Promise<void> => {
    try {
        const userId = req.user?.userId; // Use the correct property name

        const user = await User.findById(userId);
        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        res.json(user);
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const updateProfile = async (req: RequestWithUser, res: Response): Promise<void> => {
    try {
        const userId = req.user?.userId;
        const updates = req.body;

        const user = await User.findByIdAndUpdate(userId, updates, { new: true });
        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        res.json(user);
    } catch (error) {
        console.error('Error updating user profile:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const uploadContent = async (req: RequestWithUser, res: Response): Promise<void> => {
    try {
        const userId = req.user?.userId;
        const { title, description, img,email,avatar,name } = req.body;

        const upload = new Upload({ userId, title, description, img,email,avatar,name });

        
        await upload.save();

        res.status(201).json(upload);
    } catch (error) {
        console.error('Error updating user profile:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const getContent = async (req: RequestWithUser, res: Response): Promise<void> => {
    try {
        const userId = req.user?.userId;
        console.log(userId);

        const uploads = await Upload.find({ userId });
        
        
        res.json(uploads);
    } catch (error) {
        console.error('Error fetching user content:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


const getAllContent = async (req: RequestWithUser, res: Response): Promise<void> => {
    try {
        const uploads = await Upload.find();
        
        res.json(uploads);
    } catch (error) {
        console.error('Error fetching all content:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export { profile, updateProfile, uploadContent, getContent,getAllContent };



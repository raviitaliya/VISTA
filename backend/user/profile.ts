import { Response } from 'express';
import { User, Upload } from '../model/user';

import { RequestWithUser } from '../auth/authenticateToken'; // Import the custom type

const profile = async (req: RequestWithUser, res: Response): Promise<void> => {
    try {
        const userId = req.user?.userId; // Use the correct property name
        console.log(userId);

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
        const { title, description, img } = req.body;

        const upload = new Upload({ userId, title, description, img });
        await upload.save();

        res.status(201).json(upload);
    } catch (error) {
        console.error('Error updating user profile:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export { profile, updateProfile, uploadContent };


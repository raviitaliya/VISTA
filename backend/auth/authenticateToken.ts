import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Define a proper interface for the user payload
interface UserPayload {
  userId: string;
  username: string;
  iat: number;
  exp: number;
}

// Add a custom interface to extend the Request type
export interface RequestWithUser extends Request {
  user?: UserPayload;
}

export const authenticateToken = (req: RequestWithUser, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  
  const token =authHeader?.split(' ')[1];

  
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET as string) as UserPayload;
    req.user = user;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid token" });
  }
};
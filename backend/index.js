import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './db/db.js';  
import router from './routes/routes.js';  

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

connectDB();

app.use(express.json());

app.use('/', router);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
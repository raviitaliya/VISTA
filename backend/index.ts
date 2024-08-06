import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/db';
import routes from './routes/routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

connectDB()
  .then(() => {
    app.use('/api', routes);

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error: Error) => {
    console.error('Failed to connect to the database:', error);
  });

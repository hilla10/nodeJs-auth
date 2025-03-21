import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectToDB from './database/db.js';
import AuthRoutes from './routes/auth-routes.js';
import HomeRoutes from './routes/home-routes.js';
import AdminRoutes from './routes/admin-routes.js';
import UploadImageRoutes from './routes/image-routes.js';
connectToDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares

app.use(express.json());

app.use('/api/auth', AuthRoutes);
app.use('/api/home', HomeRoutes);
app.use('/api/admin', AdminRoutes);
app.use('/api/image', UploadImageRoutes);

app.listen(PORT, () => {
  console.log(`Server is now listening port ${PORT}`);
});

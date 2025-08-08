import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

connectDb();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

app.get("/", (req, res) => {
    res.send("Hyperlocal Marketplace is Running.");
});

app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});
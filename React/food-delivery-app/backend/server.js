import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';

import customerRoutes from './routes/customerRoutes.js';
import addressRoutes from './routes/addressRoutes.js';
import cartRoutes from './routes/cartRoutes.js';


dotenv.config();

// Connect to the database
connectDB();

const app = express();



//middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//routes 

//cutomer routes
app.use('/api/customers', customerRoutes);

//address routes
app.use('/api/address', addressRoutes);

//cart routes
app.use('/api/cart', cartRoutes);



app.get('/', (req, res) => {
  res.send('Food Delivery App Backend is running');
});




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

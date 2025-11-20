const express = require('express');
const App = express();
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoute');

connectDB();

App.use(cors());
App.use(express.json());

App.get('/', (req, res) => {
    res.send('API is running...');
});

App.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
App.listen(PORT, () => console.log(`http://localhost:${PORT}`));
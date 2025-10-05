import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from './routes/routes.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use('/', routes);



const users = [];

//start server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
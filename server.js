// Import dependencies
import express from 'express';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({
    path: './.env'
});

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 8000;

// Define routes
app.get('/', (req, res) => {
    res.send('Hello world from dockerized app');
});

// Start the server (only once!)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export { app };

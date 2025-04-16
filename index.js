// Using CommonJS module system exclusively
const express = require("express");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config({
    path: "./.env"
});

// Initialize Express app (only once)
const app = express();
const PORT = process.env.PORT || 3000;

// If you need to import from app.js, use require instead of import
// const appFromFile = require("./app");

// Define routes
app.get("/", (req, res) => {
    res.send("hello world from dockerized app");
});

// Start the server (only once)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Export the app if needed
module.exports = app;
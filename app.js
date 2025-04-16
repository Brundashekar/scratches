// Using CommonJS syntax only
const express = require("express");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config({
    path: "./.env"
});

// Initialize app only once
const app = express();
const PORT = process.env.PORT || 3000;

// Define routes
app.get("/", (req, res) => {
    res.send("hello world from dockerized app");
});

// Listen only once
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Export app if needed
module.exports = app;

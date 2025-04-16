// Use only CommonJS syntax - no import statements
const express = require("express");
const dotenv = require("dotenv");

// If you need app from another file, use require
// const importedApp = require("./app");

// Load environment variables
dotenv.config({
    path: "./.env"
});

// Initialize Express app (only once!)
const app = express();
const PORT = process.env.PORT || 3000;

// Define routes
app.get("/", (req, res) => {
    res.send("hello world from dockerized app");
});

//C:\Users\brunda.s\AppData\Roaming\JetBrains\IdeaIC2024.3\scratches\index.js

// Start the server (only once!)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Export app for use in other files
module.exports = app;

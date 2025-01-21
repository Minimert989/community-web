const serverless = require("serverless-http");
const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Example Routes
app.get("/", (req, res) => {
    res.send("Hello from Netlify Functions!");
});

app.get("/api/data", (req, res) => {
    res.json({ message: "This is your backend data!" });
});

// Export as a Netlify function
module.exports.handler = serverless(app);
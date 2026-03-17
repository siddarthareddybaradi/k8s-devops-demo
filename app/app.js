const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

const dbUser = process.env.DB_USERNAME;
const dbPass = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;

const mongoURI = `mongodb://${dbUser}:${dbPass}@${dbHost}:27017/${dbName}?authSource=admin`;

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send(`
        <h1>Kubernetes DevOps Demo</h1>
        <p>Application running inside Kubernetes</p>
        <p>Database: MongoDB Connected</p>
    `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

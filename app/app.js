const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
        <h1>Kubernetes DevOps Demo</h1>
        <p>Application running inside Docker container</p>
        <p>Version: 1.0</p>
    `);
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Application is healthy",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

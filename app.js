const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Welcome to DevOps App</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f6f8;
            margin: 0;
            padding: 50px;
            text-align: center;
            color: #333;
          }
          h1 {
            color: #2c3e50;
            font-size: 2.5em;
          }
          p {
            font-size: 1.2em;
            margin-top: 10px;
          }
        </style>
      </head>
      <body>
        <h1>🚀 Welcome to DevOps App</h1>
        <p>This is <strong>Spoorthi P Bhat</strong></p>
        <p>I am a <strong>Quality Engineer</strong>, an <strong>upcoming Project Manager</strong>, <strong>Anchor</strong>, and an <strong>Artist</strong>.</p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

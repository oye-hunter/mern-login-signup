const express = require("express");
const data = require("./data/data");
const dotenv = require("dotenv")

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/data", (req, res) => {
    res.json(data);
    });

    // app.get("/html", (req, res) => {
    //     res.
    //     });

app.get("/api/data/:id", (req, res) => {
    const d = data.find((d) => d._id === req.params.id);
    res.json(d);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

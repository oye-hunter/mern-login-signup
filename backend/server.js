const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
connectDB = require("./config/db");
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/data", (req, res) => {
    res.json(notes);
    });

    // app.get("/html", (req, res) => {
    //     res.
    //     });

// app.get("/api/data/:id", (req, res) => {
//     const d = notes.find((d) => d._id === req.params.id);
//     res.json(d);
// })

app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

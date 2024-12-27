const express = require("express");
const cors = require("cors");
const notes = require("./data/notes");
const dotenv = require("dotenv");
connectDB = require("./config/db");
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();
dotenv.config();
connectDB();

// Use CORS middleware
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/api/data", (req, res) => {
    res.json(notes);
});

app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

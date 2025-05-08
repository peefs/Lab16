const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const studentRoutes = require("./routes/students");
require("dotenv").config();

const app = express();

const corsOptions = {
    origin: true, // Reflect the request origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use("/api/students", studentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");
const regRoute = require('./routes/register-routes');
const app = express();

//Connect Database
connectDB();

//Using Cors
app.use(cors());

//Init Middleware( include  bodyparser through express)
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Api Running"));

//Define Routes

app.use('app/reg', regRoute);

//-------------------Senura---------------------
// app.use("/api/instructor/meal", require("./routes/api/meal"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

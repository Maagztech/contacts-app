const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes/contactroutes");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;


app.use(express.json());
app.use(cors());
mongoose
    .connect(process.env.MONGOURI)
    .then(() => console.log('connected to mongo...'))
    .catch((err) => console.log(err));

app.use(routes);

app.listen(PORT, () => console.log(`listening on ${PORT} number.`))
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./routes/contactroutes.js";

const app = express();
const PORT = process.env.PORT || 8000;


app.use(express.json());
app.use(cors());
mongoose
    .connect(process.env.MONGOURI)
    .then(()=>console.log('connected to mongo...'))
    .catch((err)=>console.log(err));

app.use(routes);

app.listen(PORT,()=>console.log(`listening on ${PORT} number.`))
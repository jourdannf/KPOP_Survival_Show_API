import express from "express";
import db from "./db/conn.mjs";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

import dotenv from "dotenv";
dotenv.config();

//Import Seed Data
import contestants from "./seed_data/contestants.js"
import performances from "./seed_data/performances.js"

//Import Routers
import contestantsRouter from "./routes/contestants.js"
import performancesRouter from "./routes/performances.js"
import showsRouter from "./routes/survival_shows.js"

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

//Set up static files
app.use("/images", express.static(path.join(__dirname, "uploads/images")));

//Set up the Routes

app.use("/contestants", contestantsRouter);
app.use("/performances", performancesRouter);
app.use("/shows", showsRouter);

//Set up the Views
app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", async (req, res)=> {
    res.send("Welcome To K-Pop Survival Show API");
});

app.get("/contestants/seed", async (req, res)=> {
    let Shows = db.collection("contestants");
    Shows.deleteMany({}) //Deletes everyting already in the database
    Shows.insertMany(contestants);
    res.send("Done!");
 });

 app.get("/performances/seed", async (req, res)=> {
    let Shows = db.collection("performances");
    Shows.deleteMany({}) //Deletes everyting already in the database
    Shows.insertMany(performances);
    res.send("Done!");
 });

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}...`);
});
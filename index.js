import express from "express";
import db from "./db/conn.js";
// const db = require("./conn.js");
import dotenv from "dotenv";
// const dotenv = require("dotenv");
dotenv.config();

//Import Seed Data
import shows from "./seed_data/survival_shows.js"
import contestants from "./seed_data/contestants.js"
import performances from "./seed_data/performances.js"

//Import Routers
import contestantsRouter from "./routes/contestants.js"
import performancesRouter from "./routes/performances.js"
import showsRouter from "./routes/survival_shows.js"

const app = express();

const PORT = process.env.PORT || 3000;

app.use("/contestants", contestantsRouter);
app.use("/performances", performancesRouter);
app.use("/shows", showsRouter);


app.get("/", (req, res)=> {
    res.send("Welcome To K-Pop Survival Show API");
});

//Seeding the data collections
app.get("/shows/seed", async (req, res)=> {
   let Shows = db.collection("shows");
   Shows.deleteMany({}) //Deletes everyting already in the database
   Shows.insertMany(shows);
   res.send("Done!");
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
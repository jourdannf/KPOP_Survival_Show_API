import express from "express";
import db from "./db/conn.mjs";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

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
import survivalShows from "./seed_data/survival_shows.js";

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

async() => {
    await db.createCollection("shows", {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["name", "gender", "runtime", "network", "description", "img", "contestantsNum", "winnersNum", "mc", "episodesNum", "winners", "losers", "winnerName"],
                properties: {
                    name: {
                        bsonType: "string",
                        description: "Title of the show is required and must be a string"
                    },
                    gender: {
                        bsonType: "string",
                        description: "Gender category of the show is required and must be a string"
                    },
                    runtime: {
                        bsonType: "object",
                        required: ["startDate", "endDate"],
                        properties: {
                            startDate: {
                                bsonType: "date",
                                description: "The start date of the show is required and must be a date"
                            },
                            endDate: {
                                bsonType: "date",
                                description: "The end date of the show is required and must be a date"}
                        },
                        descritpion: "The runtime of the show is required and must include a startDate and endDate as properties"
                    },
                    network: {
                        enum: ["KBS", "JTBC", "SBS", "Mnet", "KakaoTV", "MBC"],
                        description: "Invalid network name"
                    },
                    img: {
                        bsonType: "string",
                        descirption: "The image for the poster of the show is required and is a string"
                    },
                    contstantsNum: {
                        bsonType: "number",
                        description: "The number of contestants is required and a number"
                    },
                    winnersNum: {
                        bsonType: "number",
                        description: "The number of winners is required and a number"
                    },
                    mc: {
                        bsonType: "array",
                        description: "MC must be an array, every item must be unqiue, and is required",
                        items: {
                            bsonType: "string"
                        },
                        uniqueItems: true       
                    },
                    episodesNum : {
                        bsonType: "number",
                        descirption: "Number of episodes must be a number and is required"
                    },
                    winners: {
                        bsonType: "array",
                        description: "Winners is an array of unique elements and is required",
                        minItems: 0,
                        uniqueItems: true,
                        items: {
                            bsonType: "string"
                        }
                    },
                    losers: {
                        bsonType: "array",
                        description: "Losers is an array of unique elements and is required",
                        minItems: 0,
                        uniqueItems: true,
                        items: {
                            bsonType: "string"
                        }
                    },
                    winnerName: {
                        bsonType: "string",
                        desciption: "The name of the winning group or soloist must be a string and is required"
                    }
                }
            }
        }
    });
}

app.get("/", async (req, res)=> {
    res.send("Welcome To K-Pop Survival Show API");
});

//Seeding the data collections
// app.get("/shows/seed", async (req, res)=> {
//     let Shows = db.collection("shows");
   
//    Shows.deleteMany({}) //Deletes everyting already in the database
//    Shows.insertMany(shows);
//    res.send("Done!");
// });

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
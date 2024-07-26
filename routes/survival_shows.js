import express from "express";
import db from "../db/conn.mjs"
import { ObjectId } from "mongodb";
import seedData from "../seed_data/survival_shows.js";
import path from "path";
import multer from "multer";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const router = express.Router();

const shows = await db.collection("shows");

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../uploads/images"));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({storage: multerStorage});

router
    .route("/")
    .get(async (req, res) => {
        const result = await shows.find().sort({name: 1}).limit(8).toArray();
        if (result) res.status(200).render("survival_shows", {shows: result});
        else res.status(404).send("Resource Not Found");
    })

//Seeding the data
router
    .route("/seed")
    .get(async (req, res) => {
        let Shows = db.collection("shows");   
        Shows.deleteMany({}) //Deletes everyting already in the database
        Shows.insertMany(seedData);
        res.send("Done!");
    })

router
    .route("/add")
    .get((req, res) => {
        res.render("add_survival_show");
    })
    .post(upload.single("posterImg"), async (req, res) => {
        let collection = await db.collection("shows");
        let newDoc = {
            name: req.body.name,
            gender: req.body.gender,
            runtime: {
                startDate: new Date(req.body.startDate),
                endDate: new Date(req.body.endDate)
            },
            network: req.body.network,
            description: req.body.description,
            img: `../images/${req.file.filename}`,
            contestantsNum: Number(req.body.contestantsNum),
            winnersNum: Number(req.body.winnersNum),
            mc: [req.body.mc],
            episodesNum: Number(req.body.episodesNum),
            winners: [],
            losers: [],
            winnerName: req.body.winnerName
        }

        let result = await collection.insertOne(newDoc);
        if (result) res.status(204).send("Submit successful!");
        else res.status(400).send("Resource not created")
    })

//Test for validation 
router
    .route("/badrequest")
    .post(async (req, res)=> {
        let collection = await db.collection("shows");
        let newDoc = {
            name: "The Show",
            gender: "Female",
            runtime: {
                startDate: "2020-12-6",
                endDate: "2021-01-24"
            },
            network: "ABC",
            description: "This is some text",
            img: `../images/`,
            contestantsNum: 1,
            winnersNum: "2",
            mc: ["Jang Jiwon"],
            episodesNum: 10,
            winners: [],
            losers: [],
            winnerName: "WINNER"
        }

        await collection.insertOne(newDoc);
    })

router
    .route("/:id")
    .get(async (req, res) => {
        const query = {_id: new ObjectId(req.params.id)};
        const result = await shows.findOne(query);
        if (result) res.status(200).send(result);
        else res.status(404).send("Resource Not Found");
    })
    .delete(async (req, res) => {
        const query = {_id: new ObjectId(req.params.id)};
        
        //Delete the contestants that has no more shows that they appear in
        let contestants = await db.collection("contestants");
        
        let show = await shows.findOne(query);
        let showName = show.name;
        const secondQuery = {show: showName};

        contestants.updateMany(secondQuery, {
            $pull: {show: showName}
        });
        contestants.deleteMany({show: {$size: 0}});

        //Delete the performances from that show
        let performances = await db.collection("performances");

        performances.deleteMany({show: showName});
        
        //Send back the result of the show that's been deleted
        //Might wanna modify if statement later on to check that everything's been deleted
        let result = await shows.deleteOne(query);
        if (result) res.status(200).send(result);
        else res.status(404).send("Resource Not Found");
    })


//Update name for any survival show
router
    .route("/:id/update")
    .patch(async (req,res) => {
        
        
        let result = shows.updateOne({_id: new ObjectId(req.params.id)},{
            $set: {name: req.body.name}
        });

        if (result) res.status(200).send(result);
        else res.status(404).send("Resource Not Found");
    })
export default router;
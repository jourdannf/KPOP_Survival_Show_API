import express from "express";
import db from "../db/conn.js"
import { ObjectId } from "mongodb";
import seedData from "../seed_data/survival_shows.js";
import multer from "multer";

const router = express.Router();

const shows = await db.collection("shows");

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "../uploads/images");
    },
    filename: (req, file, cb) => {
        cb(null, req.file.originalname);
    }
});

const upload = multer({storage: multerStorage});

router
    .route("/")
    .get(async (req, res) => {
        
        // const shows = await db.collection("shows");
        const result = await shows.find().limit(10).toArray();
        if (result) res.status(200).send(result);
        else res.status(404).send("Resource Not Found")
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


//Update thumbnail image for any survival show
router
    .route("/:id/update")
    .patch(upload.single("thumbnailImg"),async (req,res) => {
        
        
        let result = shows.updateOne({_id: new ObjectId(req.params.id)},{
            $set: {img: req.file}
        });

        if (result) res.status(200).send(result);
        else res.status(404).send("Resource Not Found");
    })
export default router;
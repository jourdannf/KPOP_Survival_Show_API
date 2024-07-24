import express from "express";
import db from "../db/conn.js"
import { ObjectId } from "mongodb";

const router = express.Router();

const shows = await db.collection("shows");

router
    .route("/")
    .get(async (req, res) => {
        
        // const shows = await db.collection("shows");
        const result = await shows.find().limit(10).toArray();
        if (result) res.status(200).send(result);
        else res.status(404).send("Resource Not Found")
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
        let result = await shows.deleteOne(query);

        
    })

export default router;
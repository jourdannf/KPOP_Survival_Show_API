import express from "express";
import db from "../db/conn.js"

const router = express.Router();



router
    .route("/")
    .get(async (req, res) => {
        
        const shows = await db.collection("shows");
        const result = await shows.find().limit(10).toArray();
        res.send(result)
    })

export default router;
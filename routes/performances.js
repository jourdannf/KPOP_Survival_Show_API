import express from "express";
import db from "../db/conn.mjs"

const router = express.Router();



router
    .route("/")
    .get(async (req, res) => {
        
        const performances = await db.collection("performances");
        const result = await performances.find().limit(10).toArray();
        res.send(result)
    })

export default router;
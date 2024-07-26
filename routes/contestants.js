import express from "express";
import db from "../db/conn.mjs"

const router = express.Router();



router
    .route("/")
    .get(async (req, res) => {
        
        const contestants = await db.collection("contestants");
        const result = await contestants.find().limit(10).toArray();
        res.send(result)
    })

export default router;
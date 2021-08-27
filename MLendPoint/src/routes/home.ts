import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("I'm home");
});

export default router;

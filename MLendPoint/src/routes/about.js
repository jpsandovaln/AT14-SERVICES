const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("I'm about");
});

module.exports = router;

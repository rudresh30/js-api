import express from "express";

var router = express.Router();

router.get('/', (req, res) => {
    res.send(`GET on contact`);
});

export default router;

import express from "express";

var router = express.Router();

router.use('/', (req, res, next) => {
    console.log(`this baby is called on all calls to contacts`);
    console.log(`i have access to req object: url is - ${req.originalUrl}`);
    next();
});

router.get('/', (req, res, next) => {
    console.log(`I get called on get only`);
    console.log(`i have access to req object: method is - ${req.method}`);
    next();
});

router.get('/', (req, res) => {
    res.send(`GET on contact`);
});

router.post('/', (req, res) => {
    res.send(`POST on contact`);
});

router.put('/:contactId', (req, res) => {
    res.send(`PUT on contactId`);
});

router.delete('/:contactId', (req, res) => {
    res.send(`DELETE on contactId`);
})

export default router;

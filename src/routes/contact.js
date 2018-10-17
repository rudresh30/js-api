import express from "express";
import { addNewContact, getAllContacts, getSingleContact, updateSingleContact, deleteSingleContact } from "../controllers/controller";

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

router.get('/:contactId', getSingleContact);

router.get('/', getAllContacts);

router.post('/', addNewContact);

router.put('/:contactId', updateSingleContact);

router.delete('/:contactId', deleteSingleContact);

export default router;

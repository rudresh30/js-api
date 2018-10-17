import mongoose from "mongoose";
import { contactSchema } from "../models/model";

const Contact = mongoose.model('Contact', contactSchema); //create document named "Contact". This will create Contact class

//save data to the document. data available on post request object
export function addNewContact(req, res) {
    //pass data to Contact class. populate the document created with contactSchema
    console.log(`received post on contacts`);
    let newContact = new Contact(req.body); //data to be inserted is in req.body already formatted as per our schema
    //now save the populated document to the database
    newContact.save((err, contact) => {
        if (err) {
            res.send(err);
        } else {
            res.json(contact);
        }
    });
};

//get all contacts from the db collection Contact

export function getAllContacts(req, res) {
    Contact.find({}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    });
};

export function getSingleContact(req, res) {
    Contact.findById(req.params.contactId, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        };
    });
};

export function updateSingleContact(req, res) {
    Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        };
    });
};

export function deleteSingleContact(req, res) {
    Contact.findOneAndDelete({ _id: req.params.id }, (err) => {
        if (err) {
            res.send(err);
        } else {
            res.json({
                "message": "record deleted"
            });
        };
    });
};

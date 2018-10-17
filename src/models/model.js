import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const contactSchema = new Schema({
    firstName: {
        type: String,
        required: 'please enter first name'
    },
    lastName: {
        type: String,
        required: 'please enter last name'
    },
    email: {
        type: String,
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
    dataCreated: {
        type: Date,
        default: Date.now
    }
})
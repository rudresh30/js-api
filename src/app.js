import express from "express";
import contact from "./routes/contact";
import path from "path";
import bodyParser from "body-parser";
import mongoose from "mongoose";


const app = express();

const PORT = 5050;

//view engine
//helmet
//bodyParse

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//static path

const staticPath = path.join(__dirname, '..', '..', 'public');
app.use(express.static(staticPath));


//db connect
const dbConnectUri = 'mongodb+srv://jsapidb:mongodb123@cluster0-wolep.mongodb.net/test?retryWrites=true';
mongoose.Promise = global.Promise;
mongoose.connect(dbConnectUri, {
    useNewUrlParser: true
});


app.use('/contacts', contact);

app.get('/', (req, res) => {
    res.send(`server started on nodejs`);
});




app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})
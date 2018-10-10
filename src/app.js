import express from "express";
import contact from "./routes/contact";

const app = express();

const PORT = 5050;

app.use('/contacts', contact);

app.get('/', (req, res) => {
    res.send(`server started on nodejs`);
});




app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})
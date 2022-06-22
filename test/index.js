const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
dotenv.config();
const appRoutes = require('./routes/test-route');


const app = express();

const port = 5001;

mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`).then( () => {
    console.log("Database is connected !");
}).catch( (error) => {
    console.log("Connection error :: ", error);
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", appRoutes);

app.listen( () => {
    console.log(`Server is running at port ${port}`)
})
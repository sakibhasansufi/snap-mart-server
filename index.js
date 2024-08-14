require("dotenv").config();
const express = require('express');
const dbConnect= require("./dbConnect");
const cors = require('cors');
const app = express();

dbConnect();

app.use(express.json());
app.use(cors());


const port = process.env.PORT || 6000;

app.get('/', (req, res) => {
    res.send("Server is running")
})


app.listen(port, () => {
    console.log(`Server is running on ${port}...`);
})


require("dotenv").config();
const express = require('express');
const dbConnect= require("./dbConnect");
const cors = require('cors');
const app = express();
const productRoutes = require("./Routes/products.js")

dbConnect();

app.use(express.json());
app.use(cors());

app.use("/api",productRoutes);


const port = process.env.PORT || 6000;

app.get('/', (req, res) => {
    res.send("Server is running")
});




app.listen(port, () => {
    console.log(`Server is running on ${port}...`);
})


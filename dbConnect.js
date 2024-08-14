const mongoose = require('mongoose');

const dbConnect = () =>{
    const connectionParams={useNewUrlParser: true};
    mongoose.connect(process.env.DB, connectionParams);

    mongoose.connection.on("connected", ()=>{
        console.log("Database connected successfully");
    })

    mongoose.connection.on("error", (err)=>{
        console.log("Error occurred when connecting the database",+ err);
    })


    mongoose.connection.on("disconnected", ()=>{
        console.log("Database disconnected");
    })
};

module.exports=dbConnect;
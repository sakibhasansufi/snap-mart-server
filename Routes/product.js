const router = require("express").Router();
const movie = require("../Models/products.js");


router.get("/movie",async(req,res)=>{
    try {
        const page = parseInt(req.query.page) -1 || 0;
        const limit= parseInt(req.query.limit) || 5;
        const search = req.query.search || "";
        let sort = req.query.sort || "date";
        let category = req.query.category || "All";
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: true,
            message:"Internal server error"
        })
    }
});

module.exports=router;
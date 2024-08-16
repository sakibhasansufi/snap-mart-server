const router = require("express").Router();
const Product = require("../Models/Product.js")
const product = require("../config/products.json")


router.get("/movie", async (req, res) => {
    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 5;
        const search = req.query.search || "";
        let sort = req.query.sort || "date";
        let category = req.query.category || "All";

        const categoryOptions = [
            "Processor",
            "GPU",
            "Monitor",
            "Motherboard",
            "RAM",
            "SSD",
            "HDD",
            "Cooler",
            "Power Supply",
            "Case",
            "Keyboard",
            "Mouse",
            "Headphone",
            "Mouse Pad",
            "Speaker",
            "Headphone",
            "Microphone",
            "UPS",
            "Others"
        ];


        category === "All"
            ? (category = [...categoryOptions])
            : (category = req.query.category.split(","));

        req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

        let sortBy = {};
        if (sort[1]) {
            sortBy[sort[0]] = sort[1];
        } else {
            sortBy[sort[0]] = 'asc'
        }

        const products = await Product.find({ name: { $regex: search, $options: "i" } })
            .where("category")
            .in([...category])
            .sort(sortBy)
            .skip(page * limit)
            .limit(limit)


        const total = await Product.countDocuments({
            category: { $in: [...category] },
            name: { $regex: search, $options: "i" }
        })

        const response = {
            error: false,
            total,
            page: page + 1,
            limit,
            category: categoryOptions,
            products,
        };

        res.status(200).json(response);


    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: true,
            message: "Internal server error"
        })
    }
});



// const insertProducts = async () => {
//     try {
//         const docs = await Product.insertMany(product);
//         return Promise.resolve(docs);
//     } catch (error) {
//         return Promise.reject(error)
//     }
// };

// insertProducts()
//     .then((docs) => console.log(docs))
//     .catch((err) => console.log(err))

module.exports = router;
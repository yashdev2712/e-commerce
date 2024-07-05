import Product from "../models/productsSchema.js";

//route for user

export const prodList = async (req, res) => {

}











//route for seller
export const createPro = async (req, res) => {
    try {

        const { name, description, price } = req.body;
        if (!name || !description || !price) {
            return res.status(401).json({ error: "all field are requried" })
        }

        const newPost = await Product.create({
            name,
            description,
            price
        })

        res.status(200).send({
            _id: newPost._id,
            name: newPost.name,
            description: newPost.description,
            price: newPost.price
        })

    } catch (error) {
        console.log("error in create Product");
        res.status(500).json({
            error: error.message
        })
    }

}

export const updatePro = async (req, res) => {
    try {

        const { name, description, price, discount, rating, category, image } = req.body;
        const productId = req.params.id;

        let product = await Product.findById(productId);
        if (!product) {
            return res.status(401).json({
                error: "product id is invalid"
            })
        }

        product.name = name || product.name,
            product.price = price || product.price,
            product.discount = discount || product.discount,
            product.rating = rating || product.rating,
            product.category = category || product.category,
            product.image = image || product.image
        product.description = description || product.description,

            product = await product.save();

        res.status(200).send(product).select("-password");

    } catch (error) {
        console.log("error in update product");
        res.status(500).json({
            error: error.message
        })
    }
}

export const removePro = async (req, res) => {
    try {
        const productId = req.params.id;

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(500).json({ error: "please enter a valid product id" })
        }

        await Product.findByIdAndDelete(productId);
        res.status(200).json({ message: "product removed " })

    } catch (error) {
        console.log("error in remove product");
        res.status(500).json({
            error: error.message
        })
    }
} 
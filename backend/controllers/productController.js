import Product from "../models/productsSchema.js";
import User from "../models/userSchema.js";


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
            });
        }

        product.name = name || product.name;
        product.price = price || product.price;
        product.discount = discount || product.discount;
        product.rating = rating || product.rating;
        product.category = category || product.category;
        product.image = image || product.image;
        product.description = description || product.description;

        product = await product.save();

        return res.status(200).json(product);  // Send the response and exit the function

    } catch (error) {
        console.log("error in update product:", error);  
            return res.status(500).json({
                error: error.message
            });
    }
};


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

//route for user
export const addProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({
                message: "Product does not exist"
            });
        }
        
        const userId = req.user._id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                message: "User does not exist"
            });
        }
        
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $addToSet: { cart: productId } },
            { new: true }
        );
        
        res.status(200).send(updatedUser);
    } catch (error) {
        console.log("error while adding product to cart");
        res.status(400).json({
            error: error.message
        })
    }
}


        export const cart = async (req, res) => {
            try {
            const userId = req.user._id;
            
            const user = await User.findById(userId).select("cart").populate("cart");
            
            return res.send(user.cart);

            } catch (error) {
            console.error("Error while fetching cart:", error);
            return res.status(500).json({ error: error.message });
            }
        };
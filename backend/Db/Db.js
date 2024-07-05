import mongoose from "mongoose";


const connectToDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGOOSE_URI);
        console.log("connected to successfully");
    } catch (error) {
        console.log("error:", error.message);
    }
}

export default connectToDB;
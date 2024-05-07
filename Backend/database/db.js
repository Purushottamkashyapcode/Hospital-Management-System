import mongoose from "mongoose";
import { config } from "dotenv";

// Load environment variables from .env file
config();

export const dbConnection = () => {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
        console.error("MONGO_URI is not defined in the environment variables.");
        return;
    }

    mongoose.connect(mongoUri, {
        dbName: "MERN_HOSPITAL_MANAGEMENT_SYSTEM"
    }).then(() => {
        console.log("DB Connected");
    }).catch(err => {
        console.error(`Error in database connection: ${err}`);
    });
};

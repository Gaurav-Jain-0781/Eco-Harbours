import mongoose from "mongoose";

const fishSchema = new mongoose.Schema({
    local_name: {
        type: String,
        required: true,
    },
    scientific_name: {
        type: String,
        required: true,
    },
    seasonal_availability: {
        type: String,
        required: true,
    },
    catch_limit: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    image_url: {
        type: String,
        required: true,
    },
})

const Fish = mongoose.model("Fish", fishSchema)

export default Fish
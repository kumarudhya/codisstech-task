import mongoose from "mongoose";
const PlanSchema = mongoose.Schema(
    {
        price: {
            type: String,
            required: true
        },
        vq: {
            type: String,
            required: true
        },
        resolution: {
            type: String,
            required: true
        },
        
    }
);

const Plan = mongoose.model("Plan", PlanSchema);

export default Plan;
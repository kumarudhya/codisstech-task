import mongoose from "mongoose";
const VideoSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true,
        },
        createDate: {
            type: Date,
            default: Date.now(),
        },
    }
);

const Video = mongoose.model("Video", VideoSchema);

export default Video;
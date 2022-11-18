import Video from "../model/videoModel.js";

export const uploadVideo=async (req, res) => {
    try {
        let addVideo = await new Video({
            title:req.body.title,
            url:req.body.video,
        })
        await addVideo.save();
        console.log("video uploaded");
        return res.status(201).send( "Video uploaded successfully")
    } catch (error) {
        return res.status(400).send(error.message )
    }
}

export const getAllVideo=async(req,res)=>{
    try {
        const getVideos=await Video.find();
        return res.status(200).send(getVideos);
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

export const getByIdVideo=async(req,res,next)=>{
    try {
        const getvideo=await Video.findById(req.params.id)
        res.status(200).json(getvideo)
    } catch (error) {
        next(error)
    }
}

export const deleteVideo=async(req,res)=>{
    try {
        await Video.findOneAndDelete({title:req.body.title})
        res.status(200).json("video is deleted")
    } catch (error) {
        res.status(400).json(error.message)
    }
}

import express from "express";
import multer from "multer";
import path from "path";
import auth from "../auth/auth.js";
import Admin from "../auth/admin.js";
import { uploadVideo,getAllVideo } from "../controller/videoUpload.js";
import { addPlan } from "../controller/addPlan.js";

const router = express.Router();

const videoStorage = multer.diskStorage({
    destination: 'videos', // Destination to store video 
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now()
            + path.extname(file.originalname))
    }
});

const videoUpload = multer({
    storage: videoStorage,
    limits: {
        fileSize: 10000000 // 10000000 Bytes = 10 MB
    },
    fileFilter(req, file, cb) {
       
        // upload only mp4 and mkv format
        if (!file.originalname.match(/\.(mp4|MPEG-4|mkv)$/)) {
            console.log("ertyuiophugyftdrcvb");
            return cb(new Error('video format is incorrect'))
            
        }
        cb(undefined, true) 
    }
})

router.post('/uploadVideo', videoUpload.single('video'),[auth,Admin],uploadVideo);

router.get("/",getAllVideo);

router.post('/addPlan',[auth,Admin],addPlan);

export default router

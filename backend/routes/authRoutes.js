const express = require("express");

const{registerUser , loginUser , getUserProfile} = require("../controllers/authController");
const {protect} = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadMiddleware");

const router = express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser);
router.post("/profile" , protect , getUserProfile);

router.post("/upload-image",upload.single("image"),(req,res)=>{
    if(!req.file){
        return res.status(404).json({message:"No file uploaded"})
    }
    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
    res.status(200).json({imageUrl});
})

module.exports = router;
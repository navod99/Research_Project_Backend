const express = require('express');
const router = express.Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const Document = require("../Model/documentTemplate")

router.post("/create", upload.single("file"), async (req, res) => {
    let ItNo = req.body.fileName
    let folder = "Templates"
    console.log(req.file.originalname, "filepath")
    try {
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, { resource_type: "auto", public_id: ItNo, folder: folder });
        console.log(result)

        // Create new submission
        let document = new Document({
            topic: req.body.topic,
            avatar: result.secure_url,
            cloudinary_id: result.public_id,
            time: result.created_at
        });
        // Save submission
        await document.save()
            .then(() => res.json(document))
            .catch(err => res.status(400).json('Error: ' + err));
    } catch (err) {
        console.log(err);
    }
});

router.get("/", async (req, res) => {
    try {
        await Document.find()
            .then((document) => res.json(document))
            .catch((err) => res.status(400).json(`Error:${err}`))
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
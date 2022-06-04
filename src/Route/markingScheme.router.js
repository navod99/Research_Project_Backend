const express = require('express');
const router = express.Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const MarkingScheme = require("../Model/markingSchemes")

router.post("/create", upload.single("file"), async (req, res) => {
    let ItNo = req.body.fileName
    let folder = "Marking Schemes"
    console.log(req.file.originalname, "filepath")
    try {
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, { resource_type: "auto", public_id: ItNo, folder: folder });
        console.log(result)

        // Create new submission
        let markingScheme = new MarkingScheme({
            name: req.body.name,
            avatar: result.secure_url,
            cloudinary_id: result.public_id,
            time: result.created_at
        });
        // Save submission
        await markingScheme.save()
            .then(() => res.json(markingScheme))
            .catch(err => res.status(400).json('Error: ' + err));
    } catch (err) {
        console.log(err);
    }
});

router.get("/submissionType/:type", async (req, res) => {
    console.log("first")
    
    try{
        let type = req.params.type;
        await MarkingScheme.find({'name':type})
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
        }catch (err) {
            console.log(err);
          }
                 
});    

module.exports = router;
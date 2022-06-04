const router = require("express").Router();
const { Router, json } = require("express");
let Premark = require("../Model/presentSchema");

//Add Marks

router.route("/create").post((req,res) => {

    const groupID = Number(req.body.groupID);
    const Marks = Number(req.body.Marks);
    const Comments = req.body.Comments;

    const newPremark = new Premark({

        groupID,
        Marks,
        Comments

    })

    newPremark.save().then(() => {

        res.json("Mark Added")
    }).catch((err) => {
        console.log(err);
    })
})

//Get All Marks

router.route("/").get((req,res) =>{

    Premark.find().then((marks) => {
        res.json(marks)
    }).catch((err) => {
        console.log(err);

    })
})

// Update Marks

router.route("/update").put(async (req,res) => {
    const newPremark = req.body.newPremark
    const id = req.body.id
    console.log(newPremark, id);

    try {
        await Premark.findById(id, (error,  UpdateMark) => {
            UpdateMark.Marks = Number(newPremark);
            UpdateMark.save();
        });
    }catch (err) {
        console.log(err);
    }
    res.send("Updated");
})

//Delete Mark

router.route("/delete/:id").delete(async (req,res) =>{

    let id = req.params.id;

    await Premark.findByIdAndDelete(id).then(()=>{
        res.status(200).send({status:"Mark Deleted"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status:"Error with Deleting Mark"})
    })
})


module.exports = router; 
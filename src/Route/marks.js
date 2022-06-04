const router = require("express").Router();
const { Router, json } = require("express");
let Mark = require("../Model/marksSchema");

//Add Marks

router.route("/add").post((req,res) =>{

    const groupID = Number(req.body.groupID);
    const Marks = Number(req.body.Marks);
    const Comments = req.body.Comments;

    const newMark = new Mark({

        groupID,
        Marks,
        Comments
    })

    newMark.save().then(() => {

        res.json("Mark Added")
    }).catch((err) => {

        console.log(err);
    })
})

//Get All Marks

router.route("/").get((req,res) =>{

    Mark.find().then((marks) => {
        res.json(marks)
    }).catch((err) => {
        console.log(err);

    })
})

//Update Marks

/*
router.route("/update/:id").put(async (req,res) => {

    let userId = req.params.id;
    const {groupID, Marks, Comments} = req.body;

    const UpdateMark = {
        groupID,
        Marks,
        Comments
    }

    const update = await Mark.findByIdAndUpdate(userId, UpdateMark).then(() => {

        res.status(200).send({status: "Mark Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error Occured during Updating", error: err.message})
    })
})
*/

router.route("/update").put(async (req,res) => {
     const newMark = req.body.newMark
     const id = req.body.id
     console.log(newMark, id);

     try {
         await Mark.findById(id, (error,  UpdateMark) => {
             UpdateMark.Marks = Number(newMark);
             UpdateMark.save();
         });
     } catch (err) {
         console.log(err);
     }
     res.send("Updated");
})




//Delete Mark

router.route("/delete/:id").delete(async (req,res) =>{

    let id = req.params.id;

    await Mark.findByIdAndDelete(id).then(()=>{
        res.status(200).send({status:"Mark Deleted"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status:"Error with Deleting Mark"})
    })
})

module.exports = router; 
const SubmissionType = require("../Model/submissionType-model");

//Create SubmissionType
const addSubmissionType = async (req,res)=>{
    if(req.body){
      
            const data={
                submissionType: req.body.submissionType,
                date: req.body.date,
                time: req.body.time,
                specialMessage: req.body.specialMessage,

            }
            const submissionType = new SubmissionType(data);
          
            await submissionType.save()
                .then(data=>res.status(200).send({data:data}))
                .catch(err=>res.send(err));
        
    }
}


//Get all SubmissionTypess
const getAllSubmissionTypes = async (req, res) => {
    await SubmissionType.find()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.send(error);
        });
}

const getSubmissionType = async (req, res) => {
    console.log(req.params.id)
    SubmissionType.findById(req.params.id)
        .then((data) => { res.status(200).send(data); console.log(data)})
        .catch((err) => res.send(err))
    
}


//update SubmissionType
const updateSubmissionType = async (req, res) => {
    console.log(req.body)
    if (req.body) {
        let id = req.params.id;
        await SubmissionType.findByIdAndUpdate(id, req.body)
            .then(data => {
                res.status(200).send(data);
            })
            .catch(err => {
                res.send(error);
            });
    }
}


//delete SunmissionType
const deleteSubmissionType = async (req, res) => {
    if (req.params.id) {
        const submissionType = await SubmissionType.findById(req.params.id);
        if(submissionType){
           
            //delete proposal data
            await SubmissionType.findByIdAndDelete(req.params.id, (err, result) => {
                if (err) return res.status(500).send(err);
                return res.status(200).send(result);
            });
        }
    }
}

module.exports = {
 
    addSubmissionType,
    getAllSubmissionTypes,
    updateSubmissionType,
    deleteSubmissionType,
    getSubmissionType
}
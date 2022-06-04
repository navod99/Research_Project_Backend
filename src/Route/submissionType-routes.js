const express = require('express');
const router = express.Router();
const SubmissionTypeController = require('../controller/submissionType-controller');

module.exports = function (){
    router.post('/create', SubmissionTypeController.addSubmissionType);
    router.get('/', SubmissionTypeController.getAllSubmissionTypes);
    router.get('/:id', SubmissionTypeController.getSubmissionType);
    router.put('/update/:id', SubmissionTypeController.updateSubmissionType);
    router.delete('/delete/:id', SubmissionTypeController.deleteSubmissionType);
    return router;
}
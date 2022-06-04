const Login = require('../Model/login');
const { connect } = require('getstream')
const StreamChat = require('stream-chat').StreamChat
const addLogin = async (req, res) => {
    const login = Login(req.body);
    await login
        .save()
        .then((data) => { res.status(200).send(data) })
        .catch((err) => { res.send(err) })
    
}
const login = async (req, res) => {
    Login.findOne({ regNo: req.body.regNo })
        .then((data) => {
            if (data == null) {
            res.send(null).status(404)
            } else {
                if (data.password === req.body.password) {
                    res.send(data.userRole)
                } else {
                    res.send(null)
                }
            }
            console.log(data)
            console.log(data.password)
            console.log(req.body.password)
        
    }).catch((err)=>res.send(err))
}
module.exports = {
    addLogin,
    login
}
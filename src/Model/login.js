const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema(
{
        regNo: { type: String, required: true },
                password: { type: String, required: true },  
                userRole: { type: String, required: true }
        
})
const login = mongoose.model('login', loginSchema);
module.exports = login;
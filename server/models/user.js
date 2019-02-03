const mongoose = require('mongoose');

const User = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    digest: {
        type: String,
        required: true,
    },
    salt: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        required: false
    }
});

mongoose.model('user', User);

module.exports = mongoose.model('user');
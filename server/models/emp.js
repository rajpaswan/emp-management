const mongoose = require('mongoose');
const Skill = require('./skill');
const autoIncrement = require('mongoose-sequence')(mongoose);

const Emp = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    dob: {
        type: Date,
        required: true,
    },
    salary: {
        type: Number,
        required: true
    },
    skills: {
        type: [Skill],
        required: true
    }
});

Emp.plugin(autoIncrement, {
    inc_field: 'id'
});

mongoose.model('emp', Emp);

module.exports = mongoose.model('emp');
const mongoose = require('mongoose');

const Skill = new  mongoose.Schema({
    name: String,
    rating: Number
});

module.exports = Skill;
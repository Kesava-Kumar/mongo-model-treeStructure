const mongoose = require('mongoose');

const ChildSchema = new mongoose.Schema({
    parentName: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    children: {
        type: Array,
        require: true
    }
})

const Children = mongoose.model('Children', ChildSchema);
module.exports = Children;
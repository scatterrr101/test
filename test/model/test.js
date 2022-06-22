const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    incoming_message: {
        type: String,
        default: null
    },
    saved_message: {
        type: String,
        default: null
    }
});

module.exports = mongoose.model('test', testSchema);
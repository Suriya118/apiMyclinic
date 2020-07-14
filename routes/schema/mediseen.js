var mongoose = require('../connect');
var mediseenSchema = new mongoose.Schema({
    code: String,
    name: String,
    sale: Number,
    buy: Number,
    remark: String
}, { collection: 'mediseen'});

module.exports = mediseenSchema;

var mongoose = require('../connect');
var petSchema = new mongoose.Schema({
    name: String,
    code: String,
    customer_id: mongoose.Schema.Types.ObjectId,
    remark: String
}, { collection: 'pet'});

module.exports = petSchema;

var mongoose = require('../connect');
var repairSchema = new mongoose.Schema({
    problem: String,
    pet_id :mongoose.Schema.Types.ObjectId,
}, { collection: 'repair'});

module.exports = repairSchema;

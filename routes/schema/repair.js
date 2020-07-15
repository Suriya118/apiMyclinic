var mongoose = require('../connect');
var repairSchema = new mongoose.Schema({
    problem: String,
    pet_id :mongoose.Schema.Types.ObjectId,
    price:Number,
    remark:String,
    created_at:{type:Date,default:Date.now()}
}, { collection: 'repair'});

module.exports = repairSchema;

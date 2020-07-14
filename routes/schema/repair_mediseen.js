var mongoose = require('../connect');
var repairmediseenSchema = new mongoose.Schema({
    repair_id :mongoose.Schema.Types.ObjectId,
    mediseen_id :mongoose.Schema.Types.ObjectId,
    qty:Number,
    remark:String
}, { collection: 'repairmediseen'});

module.exports = repairmediseenSchema;

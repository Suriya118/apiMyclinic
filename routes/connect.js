const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/NodeClinic');

module.exports = mongoose;
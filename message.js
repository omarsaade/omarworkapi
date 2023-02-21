const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  mg: String,
});

//  mongoose.model("Message", messageSchema);

module.exports = mongoose.model("Message", messageSchema);

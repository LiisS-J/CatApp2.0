const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const catSchema = new Schema({
  name: String,
  sex: String,
  age: Number,
  breed: String,
  health: String,
  adoptionStatus: String,
  imgUrl: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Cat", catSchema);

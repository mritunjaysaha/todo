const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    todo: [{ type: Schema.Types.ObjectId, ref: "todo" }],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

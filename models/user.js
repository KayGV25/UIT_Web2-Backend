const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
name: { type: String, required: true },
isAdmin: { type: Boolean },
dateCreated: { type: Date },
dateUpdated: { type: Date },
});

module.exports = mongoose.model("User", UserSchema);
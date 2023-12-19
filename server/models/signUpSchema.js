const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const signUpSchema = new Schema({
    villainName: { type: mongoose.Schema.Types.ObjectId, required: true },
    email: { type: mongoose.Schema.Types.ObjectId, required: true},
    password: { type: mongoose.Schema.Types.ObjectId, required: true },
});

const Signup = mongoose.model("Signup", signUpSchema, "sign ups");

const SignUpSchemas = { Signup: Signup };

module.exports = SignUpSchemas;
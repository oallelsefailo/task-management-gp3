const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const signUpSchema = new Schema({
    villainName: { type: String, required: true },
    email: { type: String, required: true},
    password: { type: String, required: true },
});

const Signup = mongoose.model("Signup", signUpSchema, "signups");

const SignUpSchemas = { Signup: Signup };

module.exports = SignUpSchemas;
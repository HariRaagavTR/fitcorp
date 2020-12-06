const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    age: {
        type: Number,
        default: 18
    },
    email: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
});

UserSchema.methods.validPassword = function (password) {
    return (password === this.password);
}

module.exports = mongoose.model('User', UserSchema);

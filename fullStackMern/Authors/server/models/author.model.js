const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema({
    name: {
        type:String,
        required:[true, "Author's name is required"],
        maxlength:[100, "Author's name must be 3-100 characters"],
        minlength:[3, "Author's name must be 3-100 characters"],
    },
    type: {
        type:String,
        required:[true, "Author's type is required"],
        maxlength:[100, "Author's type must be 3-100 characters"],
        minlength:[3, "Author's type must be 3-100 characters"],
    },
    description: {
        type:String,
        required:[true, "Author's description is required"],
        maxlength:[100, "Author's description must be 3-100 characters"],
        minlength:[3, "Author's description must be 3-100 characters"],
    },
    skills: {
        type:[String],
        validate: [arrayLimit, 'Maximum number of skills is 3']
    },
}, {timestamps:true});

function arrayLimit(val) {
    return val.length <= 3;
}
const Author = mongoose.model('author', AuthorSchema);

module.exports = Author;


const mongoose = require('mongoose');

const CatSchema = mongoose.Schema({
    breed:	String,
    country: String,
    origin: String,
    coat: String,
    pattern: String
});

module.exports = mongoose.model('Cat', CatSchema);
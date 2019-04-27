// Headline model

// Require mongoose
var mongoose = require('mongoose');

// Create the schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the headlineSchema with the schema object
var headlineSchema = new Schema({
    headline: {
        type: String,
        required: true,
        // unique: true
    },
    // summary: {
    //     type: String,
    //     required: true
    // },
    url: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    saved: {
        type: Boolean,
        default: false
    }
})

// Create the Headline model using the headlineSchema
var Headline = mongoose.model('Headline', headlineSchema);

// Export the Headline model
module.exports = Headline;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const genreSchema = new Schema({
    name: { type: String, required: true, min: 3, max: 100 }
});

genreSchema.virtual('url').get(function(){
    return `/catalog/genre/${this._id}`;

})




const Genre = mongoose.model('Genre', genreSchema);
module.exports = Genre;
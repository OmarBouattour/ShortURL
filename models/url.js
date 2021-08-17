const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const URLSchema = new Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    count:{ type: Number, default: 1 },
    date: {
        type: String,
        default: Date.now
    }
    
});


module.exports = mongoose.model('url', URLSchema, 'urls');

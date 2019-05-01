const mongoose = require('mongoose');
const Schema = mongoose.Shema;


// create geo location schema
const GeoSchema = new Schema({
    type:{
        type: String,
        default: 'Point'
    },
    coordinates:{
        type: [Number],
        index: "2dsphere"
    }
});

// create ninjas schema and model
const NinjaSchema = new Schema({
    name: {
        type: String,
        required:[true, 'Name feild is required']
    },
    rank: {
        type: String,
    },
    available: {
        type: Boolean,
        default: false
    },
     geometry: GeoSchema

});

// create a collectins of ninja
const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;
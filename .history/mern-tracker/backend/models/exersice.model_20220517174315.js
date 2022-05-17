const mongoos = require('mongoose');
const Schema = mongoos.Schema;
const exerciseSchema = new Schema({
    username: {
        type: String,
        required: true},
    description: {
        type: String,
        required: true},
    duration: {
        type: Number,
        required: true},
    date: {
        type: Date,
        required: true}
}, {
    timestamps: true,
});
const Exercise = mongoos.model('Exercise', exerciseSchema);
module.exports = Exercise;
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gatoSchema = new Schema({
    nombre: String,
    url: String,
}, { versionKey: false })

module.exports = mongoose.model('cats', gatoSchema)
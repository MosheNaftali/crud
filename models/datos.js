const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const datosDetail =  new Schema({
    valor: String,
    descripcion: String
})
const datosDetails = mongoose.model('datos', datosDetail)
module.exports = datosDetails
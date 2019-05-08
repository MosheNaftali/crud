const mongoose = require('mongoose')
const {config} = require('../config')

mongoose.connect(config.db.url, {useNewUrlParser: true},(err)=>{
    if(!err) console.log('Conexión a base de datos exitosa')
})
module.exports = {mongoose}
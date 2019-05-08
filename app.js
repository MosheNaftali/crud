const express =  require('express')
const {config} = require('./config/index')
const {db} = require('./db')
const datosRoute = require('./routes/datos')
const app = express()
const datoModel = require('./models/datos')
app.use(express.json())

app.use('/datos', datosRoute)

const PORT = config.port
app.listen(PORT || 8000,()=>{
    console.log(`Servidor iniciado en puerto ${PORT}`)
})
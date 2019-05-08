const express =  require('express')
const models = require('./models/datos')
const {config} = require('./config')
const {db} = require('./db')
const app = express()
const datoModel = require('./models/datos')
app.use(express.json())
app.get('/', (req,res)=>{
    datoModel.find().exec()
    .then(resp => res.send(resp))
    .catch(err => res.status(409).send(err))
})
app.post('/', (req,res)=>{
    new datoModel(req.body).save()
    .then(resp => res.send(resp))
    .catch(err => res.status(409).send(err))
})
app.put('/:id', (req,res)=>{
    const id = req.params.id
    datoModel.findByIdAndUpdate(id,{$set:req.body},{new:true}).exec()
    .then(resp => res.send(resp))
    .catch(err => res.status(409).send(err))
})
app.delete('/:id', (req,res)=>{
    const id = req.params.id
    datoModel.findOneAndDelete(id).exec()
    .then(resp => res.send(resp))
    .catch(err => res.status(409).send(err))
})
const PORT = 3000
app.listen(PORT,()=>{
    console.log(`Servidor iniciado en puerto ${PORT}`)
})
const datoModel = require('../models/datos')
function getDatos(req,res){
    datoModel.find().exec()
    .then(resp => res.send(resp))
    .catch(err => res.status(409).send(err))
}
function postDatos(req,res){
    new datoModel(req.body).save()
    .then(resp => res.send(resp))
    .catch(err => res.status(409).send(err))
}
function putDatos(req,res){
    const id = req.params.id
    datoModel.findByIdAndUpdate(id,{$set:req.body},{new:true}).exec()
    .then(resp => res.send(resp))
    .catch(err => res.status(409).send(err))
}
function deleteDatos(req,res){
    const id = req.params.id
    datoModel.findOneAndDelete(id).exec()
    .then(resp => res.send(resp))
    .catch(err => res.status(409).send(err))
}
module.exports = {getDatos, postDatos, putDatos, deleteDatos}
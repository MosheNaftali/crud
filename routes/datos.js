var express = require('express');
var router = express.Router();
var {getDatos, postDatos, putDatos, deleteDatos} = require('../controllers/index');

router.get('/',(req,res)=>{
    new getDatos(req,res)
})
router.post('/',(req,res)=>{
    new postDatos(req,res)
})
router.put('/:id',(req,res)=>{
    new putDatos(req,res)
})
router.delete('/:id',(req,res)=>{
    new deleteDatos(req,res)
})
module.exports= router
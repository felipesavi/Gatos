const { Router } = require('express');
const app = require('../app');
const router = Router();
const mongoose = require('mongoose')
const fetch = require('node-fetch');

const gatoController = require('../controllers/gatoController')
const Gato = require('../models/Gatos');
const { response, route } = require('../app');
const Gatos = require('../models/Gatos');



//mostrar
router.get('/', gatoController.mostrar)

//crear
router.post('/crear', gatoController.crear)




//generar-Gatos
router.get('/gatos', (req, res) => {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(res => res.json())
        .then(json => {
            const gato = new Gato({
                nombre: json[0].id,
                url: json[0].url,
            })
            gato.save(function(err, gato) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error al guardar'
                    })
                }
                res.redirect('/')
            })
        })


})




//borrar
router.get('/borrar/:id', gatoController.borrar)




module.exports = router;
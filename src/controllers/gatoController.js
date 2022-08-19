const Gato = require('../models/Gatos');


//mostar

module.exports.mostrar = (req, res) => {
    Gato.find({}, (error, cats) => {
        if (error) {
            return res, status(500).json({
                message: 'Error al mostrar'
            })
        }

        res.render('index.ejs', { cats: cats })
    })
}

//crear
module.exports.crear = (req, res) => {

    const gato = new Gato({
        nombre: req.body.nombre,
        url: req.body.url
    })
    gato.save(function(err, gato) {
        if (err) {
            return res.status(500).json({
                message: 'Error al guardar'
            })
        }
        res.redirect('/')
    })

}

//borrar
module.exports.borrar = (req, res) => {
    const id = req.params.id
    Gato.findByIdAndRemove(id, (error, cats) => {
        if (error) {
            return res.status(500), json({
                message: 'Error Al eliminar datos'
            })
        }
        res.redirect('/')
    })
}
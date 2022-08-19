const mongoose = require('mongoose')
const url_Mdb = 'mongodb://localhost/Imgbd'


mongoose.connect(url_Mdb)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'Error al concectar MDB'))
db.once('open', function callback() {
    console.log('conexion correcta')
})

module.exports = db
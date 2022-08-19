const express = require('express');
const app = express();
const path = require('path');

const db = require('./db');
const gatos = require('./routers/index')


//Configuraciones
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//midd
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static('public'))


//Routes
app.use(gatos)

//Static




//404




module.exports = app;
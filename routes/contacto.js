var express = require('express');
var router = express.Router();

//importo la coneccion

const pool = require('../conexionbd');

router.get('/', function(req, res, next) {
    res.render('contacto');
  });


router.post('/', async (req, res) =>{
    const{nombre, email, telefono, asunto, mensaje} = req.body;
        const nuevocontacto = {
            nombre,
            email,
            telefono,
            asunto,
            mensaje,
        };

    await pool.query('INSERT INTO contacto set ?', [nuevocontacto]);

    console.log(req.body);
    res.send('recibido');
})

module.exports = router;


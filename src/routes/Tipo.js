const express = require('express');
const { Tipo } = require('../db');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        let dbTipos = await Tipo.findAll();
        let result = dbTipos.map(elem => {
            return {
                id: elem.id,
                nombre: elem.tipo
            }
        });
        res.status(200).send(result.sort(function(a, b) {
            if(a.nombre > b.nombre) {
                return 1;
            }
            if(b.nombre > a.nombre) {
                return -1;
            }
            return 0;
        }));
    } catch(e) {
        console.log(e);
    };
});

module.exports = router;
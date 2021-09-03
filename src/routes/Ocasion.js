const express = require('express');
const { Ocasion } = require('../db');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        let dbOcasiones = await Ocasion.findAll();
        let result = dbOcasiones.map(elem => {
            return {
                id: elem.id,
                nombre: elem.ocasion
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
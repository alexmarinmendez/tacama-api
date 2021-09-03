const express = require('express');
const { Linea, Tipo } = require('../db');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        // let dbLineas = await Linea.findAll();
        let dbLineas = await Linea.findAll({
            include: {
                model: Tipo,
                attributes: ['tipo']
            }
        });
        let result = dbLineas.map(elem => {
            return {
                id: elem.id,
                nombre: elem.linea,
                tipo: elem.Tipo
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
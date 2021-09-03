const express = require('express');
const { Categoria } = require('../db');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        let dbCategorias = await Categoria.findAll();
        let result = dbCategorias.map(elem => {
            return {
                id: elem.id,
                nombre: elem.categoria
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
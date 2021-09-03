const express = require('express');
const { Producto } = require('../db');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        let dbProductos = await Producto.findAll();
        let result = dbProductos.map(elem => {
            return {
                id: elem.id,
                nombre: elem.producto,
                stock: elem.stock,
                descripcion: elem.descripcion,
                imagen: elem.imagen,
                precio: elem.precio,
                desc: elem.desc,
                presentacion: elem.presentacion,
                tamano: elem.tamano,
                origen: elem.origen,
                suelo: elem.suelo,
                color: elem.color,
                aroma: elem.aroma,
                paladar: elem.paladar,
                crianza: elem.crianza,
                maridaje_int: elem.maridaje_int,
                maridaje_peru: elem.maridaje_peru
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
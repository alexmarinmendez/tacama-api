const { Router } = require('express');

const tiposRoutes = require('./Tipo');
const lineasRoutes = require('./Linea');
const categoriasRoutes = require('./Categoria');
const ocasionesRoutes = require('./Ocasion');
const productosRoutes = require('./Producto');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/tipos', tiposRoutes);
router.use('/lineas', lineasRoutes);
router.use('/categorias', categoriasRoutes);
router.use('/ocasiones', ocasionesRoutes);
router.use('/vinos', productosRoutes);

module.exports = router;
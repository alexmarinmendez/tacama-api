const server = require('./src/app.js');
const { conn, Tipo, Linea, Categoria, Ocasion, Producto } = require('./src/db.js');

conn.sync({ force: true }).then(() => {
    const tiposInArray = ['Vinos', 'Piscos', 'Espumosos'];
    tiposInArray.forEach(elem => {
        Tipo.findOrCreate({
            where: {
                tipo: elem
            }
        })
    });
    const lineasInArray = [
        { linea: 'Línea Selección',tipo_id: 1 },
        { linea: 'Línea Premium', tipo_id: 1 },
        { linea: 'Línea de la Viña', tipo_id: 1 },
        { linea: 'Línea Clásica', tipo_id: 1 },
        { linea: 'Línea Alta Gama', tipo_id: 1 },
        { linea: 'Línea Aguja', tipo_id: 1 },
        { linea: 'Pisco Premium', tipo_id: 2 },
        { linea: 'Pisco Mosto Verde', tipo_id: 2 },
        { linea: 'Pisco Artesanal', tipo_id: 2 },
        { linea: 'Línea Celebración', tipo_id: 2 }
    ];
    lineasInArray.forEach(elem => {
        Linea.findOrCreate({
            where: {
                linea: elem.linea,
                TipoId: elem.tipo_id
            }
        })
    });
    const categoriasInArray = ['Vino Aguja', 'Tinto Semiseco Dulce', 'Tinto Seco', 'Rosé Semiseco Dulce', 'Rosé Seco', 'Blanco Semiseco Dulce', 'Blanco Seco', 'Pisco Premium', 'Pisco Acholado', 'Mosto Verde', 'Espumoso Semiseco', 'Espumoso Extra Brut', 'Espumoso Brut'];
    categoriasInArray.forEach(elem => {
        Categoria.findOrCreate({
            where: {
                categoria: elem
            }
        })
    });
    const ocasionesInArray = ['Pescado a la Parrilla', 'Pescados magros', 'Pastas ligeras', 'Pastas con salsa roja', 'Carnes rojas', 'Carnes a la parrilla', 'Carnes blancas', 'Asados', 'Adobo de chancho', 'Pollo a la parrilla', 'Chifa', 'Aperitivos', 'Postres', 'Bizcochos', 'Celebraciones entre amigos', 'Reuniones entre amigos', 'Reuniones en familia', 'Postres de frutos rojos', 'Todo tipo de Celebraciones'];
    ocasionesInArray.forEach(elem => {
        Ocasion.findOrCreate({
            where: {
                ocasion: elem
            }
        })
    });
    const productosInArray = [{ 
        producto: 'Petit Verdot', 
        stock: 10, 
        descripcion: 'Selección de uvas Petit Verdot introducidas por Tacama al Peru desde Francia, hace más de 30 años. Un vino delicado, fresco, equilibrado y original. ', 
        imagen: 'https://i.imgur.com/eaBVX53.png', 
        precio: 44.9, 
        desc: 10, 
        color: 'Púrpura intenso con reflejos violetas', 
        aroma: 'A violetas, moras y ciruelas maduras',
        paladar: 'Es estructurado con taninos firmes y final a frutas negras', 
        maridaje_int: 'Ideal para acompañar carne asada y cordero a la parrilla', 
        maridaje_peru: 'Recomendado para acompañar anticuchos de corazón de res, papa rellena, arroz con pato y tallarín en salsa de hongos' 
    },
    { 
        producto: 'Malbec', 
        stock: 10, 
        descripcion: 'Selección de uvas Malbec introducidas por Tacama al Peru desde Francia, hace más de 30 años. Un Vino redondo y placentero.', 
        imagen: 'https://i.imgur.com/8pXSOw7.png', 
        precio: 44.9, 
        desc: 10, 
        color: 'Rubí intenso con reflejos violáceos', 
        aroma: 'A ciruelas, guindas y cerezas',
        paladar: 'Fresco, predominado el final a mermelada de ciruela', 
        maridaje_int: 'Ideal para acompañar pastas con salsa de tomate, lomo a la parrilla y estofado de res', 
        maridaje_peru: 'Recomendado para acompañar guiso de carne, mondonguito a la italiana, medallón de pavita al vino tinto, albóndigas entomatadas y tacu tacu' 
    },
    { 
        producto: 'Petit Verdot Tannat', 
        stock: 10, 
        descripcion: 'Selección de uvas Petit Verdot y Tannat introducidas por Tacama al Peru desde Francia, hace más de 30 años. Estas variedades se han adaptado maravillosamente al terruño de Tacama.', 
        imagen: 'https://i.imgur.com/MtX1isF.png', 
        precio: 44.9, 
        desc: 10, 
        color: 'Violáceo profundo con bellos reflejos púrpura', 
        aroma: 'A frutos rojos y negros muy maduros, higos y frutos secos',
        paladar: 'Es persistente con final prolongado', 
        maridaje_int: 'Ideal para acompañar carne rojas, ragú de ternera, lasagna a la bolognesa', 
        maridaje_peru: 'Recomendado para acompañar guiso de garbanzos con res, lomo de res en salsa de vino tinto, asado de ternera, seco de pato y tallarines rojos con carne de res' 
    },
    { 
        producto: 'Alicante Bouschet', 
        stock: 10, 
        descripcion: 'Selección de uvas Alicante Bouschet introducidas por Tacama al Peru desde Francia. Una de las pocas existentes con pulpa tinta (tintorera).', 
        imagen: 'https://i.imgur.com/CXegOEI.png', 
        precio: 44.9, 
        desc: 10, 
        color: 'Denso y oscuro', 
        aroma: 'Elegante en nariz, con aromas a frutas negras y rojas',
        paladar: 'Es equilibrado con taninos dulces', 
        maridaje_int: 'Ideal para acompañar asado al vino tinto, guisados de pollo con tomate y canelones de res en salsa roja', 
        maridaje_peru: 'Recomendado para acompañar cazuela de cordero, frijoles negros con jamón, pepián de cordero y susado de cabrito' 
    },
    { 
        producto: 'Carmenére', 
        stock: 10, 
        descripcion: 'Selección de uvas Carmenère introducidas por Tacama al Peru desde Francia. Originaria de Burdeos.', 
        imagen: 'https://i.imgur.com/LxV7ote.png', 
        precio: 44.9, 
        desc: 10, 
        color: 'Rojo intenso', 
        aroma: 'A frutos negros maduros, sauco y pimiento dulce',
        paladar: 'Presenta taninos amables y final prolongado', 
        maridaje_int: 'Ideal para acompañar estofados y costillas de cordero con hierbas como tomillo y romero', 
        maridaje_peru: 'Recomendado para acompañar adobo de cerdo, conejo guisado, lomito adobado y ternera al horno' 
    },
    { 
        producto: 'Nielluccio Malbec',
        stock: 0, 
        descripcion: 'Ambrosía es la propuesta de Tacama para un refrescante y agradable vino rosado. Importamos la variedad Niellucio en 2008. Es una variedad de Córcega, también conocida como Sangiovese en Italia. Por la complejidad que siempre trae consigo una mezcla, combinamos las aromáticas uvas Malbec con Niellucio.', 
        imagen: 'https://i.imgur.com/QTsBiLW.png', 
        precio: 40.5, 
        desc: 10, 
        color: 'De un rosa pálido con reflejos de rosa brillante', 
        aroma: 'Tiene una nariz muy fina y delicada, con notas de pétalos de rosa, tangelo, frutas rojas y malvavisco',
        paladar: 'Tiene un gusto atractivo a melocotón con notas redondas de tangelo y un final suave y equilibrado', 
        maridaje_int: 'Idealmente este vino puede acompañar a los mariscos, "lomo saltado" y fettuccine con un medallón de filete de ternera',
        maridaje_peru: ''
    },
    { 
        producto: 'Sauvignon Blanc', 
        stock: 10, 
        descripcion: 'El Blanco de Blancos Sauvignon Blanc es el resultado de nuestras mejores parcelas de uvas Sauvignon Blanc.', 
        imagen: 'https://i.imgur.com/1CgCXm7.png', 
        precio: 44.9, 
        desc: 10, 
        color: 'Amarillo pajizo, brillante y limpio con ribetes dorados', 
        aroma: 'Presencia clara a aromas a maracuyá, piña madura, durazno, frutos cítricos y notas florales',
        paladar: 'Muy fresco con notas cítricas y frutas exóticas, final agradable con carácter y bien estructurado', 
        maridaje_int: 'Servirlo frio, ideal para acompañar pescados, mariscos y aves', 
        maridaje_peru: 'Ceviche, Causas de mariscos, filete de pescado a la plancha, Jalea de mariscos y comida Nikkei' 
    },
    { 
        producto: 'Chardonnay Sauvignon Blanc Viognier', 
        stock: 10, 
        descripcion: 'Emblemático de Tacama. Expresa perfectamente las condiciones climáticas iqueñas muy favorables a la elaboración de grandes vinos blancos.', 
        imagen: 'https://i.imgur.com/gFftE4W.png', 
        precio: 44.9, 
        desc: 10, 
        color: 'Amarillo pálido', 
        aroma: 'Frutales a pera, manzana y membrillo',
        paladar: 'Persistente con gran armonía entre fruta y frescura', 
        maridaje_int: 'Servirlo frío, ideal para acompañar pescado a la menier, carpaccio de lenguado y ensalada primaveral con pollo, mostaza y miel', 
        maridaje_peru: 'Servirlo frío, recomendado para acompañar escabeche de pescado, causa limeña, arroz con mariscos, papa a la huancaína y ají de gallina' 
    },
    { 
        producto: 'O Malbec', 
        stock: 10, 
        descripcion: 'Tacama pone en sus manos este vino hecho de uvas Malbec con más de 80 años en nuestro terruño. Las características únicas de este vino han requerido 14 meses de crianza en barricas de roble francés.', 
        imagen: 'https://i.imgur.com/TgKebn6.png', 
        precio: 60, 
        desc: 10, 
        color: 'Violeta profundo', 
        aroma: 'Gran complejidad con detalles de frutos rojos como la cereza fresca, también tiene toques de vainilla, caramelo y un elegante toque de roble',
        paladar: 'De excelente equilibrio, taninos redondos, sabor intenso a cereza de roble y deliciosa persistencia', 
        crianza: '14 meses en barrica de roble francés',
        maridaje_int: 'Ideal para acompañar todo tipo de carnes, pastas y quesos', 
        maridaje_peru: 'Recomendado para acompañar cerdo a la canela con puré de yuca, albóndigas con tacu tacu y un seco de carne' 
    },
    { 
        producto: 'Tacama Tinto SemiSeco', 
        stock: 0,
        descripcion: 'Un vino semiseco suave y agradable al paladar. Fresco y dulce.', 
        imagen: 'https://i.imgur.com/KeNJ7Xp.png', 
        precio: 21.9, 
        desc: 10, 
        color: 'Violáceo brillante con ribetes a rojo cereza, limpio y brillante', 
        aroma: 'Frutas rojas y negras',
        paladar: 'Fresa y frambuesa', 
        maridaje_int: 'Ideal con embutidos, quesos fuertes, frutas tropicales, fruta seca, comidas con especies y carnes asadas', 
        maridaje_peru: 'Este vino hace una buena combinación con arroz tapado y butifarra' 
    }];
    productosInArray.forEach(elem => {
        Producto.findOrCreate({
            where: {
                producto: elem.producto,
                stock: elem.stock,
                descripcion: elem.descripcion,
                imagen: elem.imagen,
                precio: elem.precio,
                desc: elem.desc,
                color: elem.color,
                aroma: elem.aroma,
                paladar: elem.paladar,
                maridaje_int: elem.maridaje_int,
                maridaje_peru: elem.maridaje_peru
            }
        })
    });


    server.listen(3001, () => {
        console.log('%s listening at 3001');
    });
})
    .catch(e => console.log('ERROR :( ' + e));


const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Producto', {
    producto: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    precio: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    desc: {
        type: DataTypes.DOUBLE,
        defaultValue: 0,
    },
    presentacion: {
        type: DataTypes.STRING,
        defaultValue: 'botella',
    },
    tamano: {
        type: DataTypes.INTEGER,
        defaultValue: 750,
    },
    origen: {
        type: DataTypes.STRING,
        defaultValue: 'Valle de Ica, Viña Tacama',
    },
    suelo: {
        type: DataTypes.STRING,
        defaultValue: 'Franco Arenoso'
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    aroma: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    paladar: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    crianza: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    maridaje_int: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    maridaje_peru: {
        type: DataTypes.STRING,
        allowNull: true,
    }
  });
};

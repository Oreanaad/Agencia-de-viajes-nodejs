import Sequelize from "sequelize";
import db from '../config/db.js';

export const Viaje = db.define('viajes', {
    //en un objeto definiremos las columnas de nuestra base de datos con nombre y tipo de dato
    titulo:{
        type: Sequelize.STRING
    },
    precio:{
        type: Sequelize.STRING
    },
    fecha_ida:{
        type: Sequelize.DATE
    },
    fecha_vuelta:{
        type: Sequelize.DATE
    },
     fecha_ida:{
        type: Sequelize.STRING
    },
    imagen: {
        type:Sequelize.STRING
    },
    descripcion:{
        type: Sequelize.STRING
    },
    disponibles:{
        type: Sequelize.STRING
    },
    slug:{
        type: Sequelize.STRING
    }
})
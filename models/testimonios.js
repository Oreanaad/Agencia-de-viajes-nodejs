import Sequelize from "sequelize";
import db from '../config/db.js';

export const Testimonio = db.define('testimonios', {
    //en un objeto definiremos las columnas de nuestra base de datos con nombre y tipo de dato
    nombre:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    mensaje:{
        type: Sequelize.STRING
 
    }
})
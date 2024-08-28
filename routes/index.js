import express from 'express';
import { paginaInicio, 
        paginaNosotros, 
        paginaContacto, 
        paginaViajes, 
        paginaTestimoniales, 
        paginaDetalleViaje} from '../controllers/paginasController.js';

import {
        guardarTestimonio
  } from "../controllers/testimoniosController.js";

const router = express.Router();

//re: lo que enviamos - res: lo que express nos devuelve

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/contacto', paginaContacto);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);  //Comodin para cargar un metodo del controlador solo que cambia la variable segun el viaje que tratamos de ver

router.get('/testimonios', paginaTestimoniales);
router.post('/testimonios', guardarTestimonio)


export default router;
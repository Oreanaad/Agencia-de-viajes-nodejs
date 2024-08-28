import {Viaje} from "../models/Viaje.js";
import {Testimonio} from "../models/testimonios.js";

const paginaInicio = async (req, res)=>{ 
        //Consulta 3 vijaes del modelo viajes 

        const promiseDB = []

        promiseDB.push(Viaje.findAll({limit: 3}));
        promiseDB.push(Testimonio.findAll({limit: 3}));

        try {
        const resultado = await Promise.all(promiseDB); // para ejectutar ambos promises al mismo tiempo 
          res.render('inicio', {
           pagina: "Inicio",
           clase: "home",
           viajes: resultado[0],
           testimonios: resultado[1]
         });  //Render manda a llamar una vista
                
        } catch (error) {
                console.log(error);
        }
}
  

const paginaNosotros = (req, res)=>{ 
    res.render('nosotros', {
             pagina: "Nosotros"
        });
         }    

const paginaContacto = (req, res)=>{ 
    res.render('contacto',{
            pagina: "Contacto"
    });
            }

const paginaViajes = async (req, res)=>{ 
        //consultar la DB
        const viajes = await Viaje.findAll();

    res.render('viajes', {
            pagina: "Proximos viajes",
            viajes,
    });
            }

const paginaTestimoniales = async(req, res)=>{ 
    try {
        const testimonios = await Testimonio.findAll();

        res.render('testimonios', {
                pagina: "testimonios",
                testimonios
        });
    } catch (error) {
        
    }
            }



//Muestra un viaje por su slug, es decir uno por uno

const paginaDetalleViaje = async(req, res)=>{
const{slug}= req.params;

try {

      const viaje = await Viaje.findOne({where : {slug}}); 
      res.render('viaje',{
        pagina: 'Informacion viaje',
        viaje
      })
} catch (error) {
      console.log(error);  
}

}

//exporrae los controladores 
export{
        paginaInicio,
        paginaNosotros,
        paginaContacto,
        paginaViajes,
        paginaTestimoniales,
        paginaDetalleViaje
    
    }
import{Testimonio} from '../models/testimonios.js';
const guardarTestimonio = async (req, res)=>{

    //validar...

    const { nombre, email, mensaje} = req.body;

    const errores = []

    
    if(nombre.trim()=== ''){
        errores.push({mensaje : 'El nombre esta vacio'});
    }

    if(email.trim()=== ''){
        errores.push({mensaje: 'El email esta vacio'});
    }
    if(mensaje.trim()=== ''){
        errores.push({mensaje: 'El mensaje esta vacio'});
    }

    if(errores.length > 0){
        //consultar testimonios existentes
        const testimonios = await Testimonio.findAll();
        //mostrar la vista con errores

        res.render('testimonios', {
            pagina: 'testimonios', 
            errores,
            nombre,
            email,
            mensaje,
            testimonios
        })
    }else{
        //Almacenarlo en la DB 

        try {
            await  Testimonio.create({
                nombre,
                email,
                mensaje
            });
            res.redirect('/testimonios')
        } catch (error) {
            console.log(error);
        }
    
    }
    
}

export {
    guardarTestimonio
}
//Usado para configurar express

//Para detener el servidor usamos control C
//Para arrancarlo usamos npm run dev

import express from 'express' ;
import router from './routes/index.js';
import db from './config/db.js';




const app = express();

//Conectar con la base de datos 
db.authenticate()
    .then(() => console.log("BD conectada"))
    .catch(error => console.log(error))

//Definir puerto
const port = process.env.PORT || 3000; //variables de entorno definicion del puerto en el host

//Habilitar pug
app.set('view engine', 'pug');

//Obtener en year aftual con nuestro propio midelware
app.use((req, res, next)=>{
    const year = new Date();  //agregar archivos de una vista

    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de viaje" //para que salga eso junto a pagina en el nombre de la tab
    next();
});

//Agregar body parser para leer datos de formulario
app.use(express.urlencoded({extended:true}));

//Definir la carpeta publica
app.use(express.static('public'))

//agregar router
app.use('/', router);

app.listen(port, () =>{
    console.log(`El servido esta funcionando en el puerto ${port} `);
}
)


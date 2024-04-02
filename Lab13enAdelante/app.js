// Node.js environment for web 
const express = require('express');
const app = express();

// Template engine for node for dynamic HTML
app.set('view engine', 'ejs');
app.set('views', 'views');

const session = require('express-session');
app.use(session({
  secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
  resave: false, 
  saveUninitialized: false, 
}));

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
  console.log('Esto de aquí es un Middleware!');
  next(); 
});


// Cookie management
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// Multer config
const multer = require('multer');

//fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, 'public/uploads');
    },
    filename: (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, new Date().toISOString() + '-' + file.originalname);
    },
});

app.use(multer({ storage: fileStorage }).single('imagen')); 


// CSRF Attack Protecion
const csrf = require('csurf');
const csrfProtection = csrf();
app.use(csrfProtection); 

// User routes
const rutasUsuarios = require('./routes/users.routes');
app.use('/users', rutasUsuarios);

// Camera routes
const rutasCamaras = require('./routes/camaras.routes');
app.use('/', rutasCamaras);

app.use((request, response, next) => {
  response.status(404);
  response.sendFile(path.join(__dirname, 'views', '404.html')); 
});

app.listen(3000);
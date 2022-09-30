const mysql = require('mysql');
const myconnection = require('express-myconnection');

const express = require('express');
const path = require('path');
const app = express();

const morgan = require('morgan');

//SETTINGS
app.set('port',process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'))

//MIDDLEWARES
app.use (morgan('dev'));

app.use(myconnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'clientes_db'
},'single'))

app.use(express.urlencoded({extended: false}));


//ROUTES
app.use('/', require('./routes/clientes'));



//PUESTOS
app.listen(app.get('port'), () => {
    console.log("el servidor esta corriendo en el puerto : 3000")
})



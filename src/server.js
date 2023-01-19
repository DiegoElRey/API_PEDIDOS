const express = require('express');
const path = require('path');
const app = express();
const user_routes = require('./routes/user');

// config swagger
const swaggerUI = require('swagger-ui-express'); 
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerSpec = {
    definition:{
        openapi: "3.0.0",
        info: {
            tittle: "Node MongoDB API",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:4000"
            }
        ]
    },
    apis:[
        `${path.join(__dirname, "./routes/*.js")}`
    ],

}


//config
app.set('port', process.env.PORT || 4000);

app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: false}));

//routes

app.get('/', (req, res) =>{
    res.send('Hello world');
})

//middleware
app.use(express.json());
app.use('/api', user_routes);
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec))) //config swagger

//static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
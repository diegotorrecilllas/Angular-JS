'use strict'
const Express = require('express');
const BodyParser = require('body-parser');
const Path = require('path');


const App = Express();

App.use(BodyParser.urlencoded({extended:false}))
App.use(BodyParser.json())
App.use(Express.static(Path.join(__dirname,'public')))

App.get('*',(req, res,next)=>{
    if(req.accepts('html')){
        res.sendFile(Path.join(__dirname,'public','index.html'))
    }else{
        next()
    }
})

App.listen(3000,()=>console.log("El servidor está iniciado"))
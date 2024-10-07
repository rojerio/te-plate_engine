 const express = require('express');
 const exphbs = require('express-handlebars');
 const path = require('path')

 const app = express()

 app.set('views', path.join(__dirname))
 app.engine('handlebars', exphbs.engine())
 app.set('view engine', 'handlebars')

 app.get('/', function(req,res) {
    res.render('home', {layout:false})
 })

 app.listen(3000)
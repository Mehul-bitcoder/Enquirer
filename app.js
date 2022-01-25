const express = require('express')
const app = express()
const path = require('path')
const port = 2500;
var { engine } = require('express-handlebars');
var cors = require('cors')
const homeRoute = require("./routes/Allroutes.js")
require('dotenv/config')
var mongoose = require('mongoose')


//mongoose
mongoose.connect(process.env.DB_KEY, () => {
    console.log('db connected successfully')
})


//parsing body
app.use(express.json())

//serving static files
const staticpath = path.join(__dirname, "/public")
app.use(express.static(staticpath))


//handlebar engine
app.engine('hbs', engine({ extname: '.hbs', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts' }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs')
app.use(cors())


//route 
app.use('/', homeRoute)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
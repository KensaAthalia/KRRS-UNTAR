const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session')
const layouts = require('express-ejs-layouts')
const mongoose = require('mongoose')

mongoose.connect(('mongodb+srv://admin:UNTAR2020@cluster0.nu6km.mongodb.net/KRRS?retryWrites=true&w=majority')
,(err,res) => {
    if(err){
        console.error(err);
    }
    else{
        console.log('Database Terhubung');
    }
})

const app = express()
app.set('view engine','ejs');
app.set('layout','layouts/main.ejs','layouts/admin.ejs');


app.use(layouts);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

//routes
const homeRoute = require('./routes/home')
app.use('/',homeRoute)

const adminRoute = require('./routes/admin')
app.use('/',adminRoute)

const authRoute = require('./routes/auth')
app.use('/login',authRoute)

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen('3000',()=>{
    console.log('Server jalan di port 3000')
})
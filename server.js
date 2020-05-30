const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');
const port = 3000;

//Import routers\\
const gets = require(path.join(__dirname, 'routes', 'get'));
const posts = require(path.join(__dirname, 'routes', 'post'));
//---------------\\


//Middleware\\
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, 'public')));
//-----------\\

//Page gets and responses\\

//The gets
app.use(gets);
//The posts
app.use(posts);
//The 404 error
app.use((req, res, next) => {

    res.redirect('/game');

});
//------------------------\\



app.listen(port, ()=>{console.log(`Conected on port: ${port}`)});
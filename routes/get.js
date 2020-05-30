const express = require('express');
const router = express.Router();
const path = require('path');
const route = require(path.join(__dirname, 'viewsPath'));
const dbase = require(path.join(__dirname, '..', 'util', 'db'));

const UsersData = require(path.join(__dirname, '..', 'util', 'currentUsers'));

router.get('/login', (req, res, next)=>{

    let UsersArray = UsersData.array();
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;


    let Debounce = false;
    for(let i = 0; i < UsersArray.length; i++){

        if(UsersArray[i].ip == ip){
            Debounce = true;
        }

    };

    if(Debounce){
            console.log('Found a user!');
            res.redirect('/game');
    }else{
        res.sendFile(route('login.html')); 
    }
    
    

});

router.get('/signup', (req, res, next)=>{

    let UsersArray = UsersData.array();
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;


    let Debounce = false;
    for(let i = 0; i < UsersArray.length; i++){

        if(UsersArray[i].ip == ip){
            Debounce = true;
        }

    };

    if(Debounce){
            console.log('Found a user!');
            res.redirect('/game');
    }else{
        res.sendFile(route('signup.html')); 
    }

});


router.get('/game', (req, res, next)=>{

    res.sendFile(route('canvas.html')); 

});

router.get('/getUserInfo', (req, res, next)=>{

    let UsersArray = UsersData.array();
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    let Debounce = false;
    let InfoToBeSent;
    for(let i = 0; i < UsersArray.length; i++){

        if(UsersArray[i].ip == ip){
            Debounce = true;
            InfoToBeSent = UsersArray[i];
        }

    };

    if(Debounce){
        console.log('found info')
        res.send(InfoToBeSent);
    }else{
        console.log('didnt find')
        res.send('error');
    }

});



module.exports = router;
const express = require('express');
const router = express.Router();
const path = require('path');
const dbase = require(path.join(__dirname, '..', 'util', 'db'));

const UsersData = require(path.join(__dirname, '..', 'util', 'currentUsers'));

router.post('/createAccount', (req, res, next)=>{

    let UserInfo = req.body;
    let ip = req.ipInfo.ip;  


    dbase.query('CALL CreateNewAccount("' + UserInfo.name + '", "' + UserInfo.password + '");', (err, results, fields) =>{
        if(err)throw err;
        console.log(fields);
        if(fields == undefined){
            res.send('Account created!');
        }else{
            res.send('Username already existed!');
        };
        
    });


});

router.post('/loginAccount', (req, res, next) =>{
    let UserInfo = req.body;
    let ip = req.ipInfo.ip;    

    dbase.query('CALL LoginAccount("' + UserInfo.name + '", "' + UserInfo.password + '");', (err, results, fields) =>{
        if(err)throw err;
        if(fields == undefined){
            res.send('Either the username or password is incorrect!');
        }else{
            UsersData.add(ip, UserInfo.name, UserInfo.password);
            res.send('logged');
        };
        
    });

});


router.post('/logoff', (req, res, next) =>{

    let UserToBeRemoved = req.body;
    UsersData.remove(UserToBeRemoved);

    res.redirect('/login');

});

module.exports = router;
const express = require('express');
const router = express.Router();
const path = require('path');
const dbase = require(path.join(__dirname, '..', 'util', 'db'));

const UsersData = require(path.join(__dirname, '..', 'util', 'currentUsers'));

router.post('/createAccount', (req, res, next)=>{

    let UserInfo = req.body;
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;


    dbase.query('CALL CreateNewAccount("' + UserInfo.name + '", "' + UserInfo.password + '");', (err, results, fields) =>{
        if(err)throw err;

        if(fields == undefined){
            UsersData.add(ip, UserInfo.name, UserInfo.password);
            res.send('Account created!');
        }else{
            res.send('Username already existed!');
        };
        
    });


});

router.post('/loginAccount', (req, res, next) =>{
    let UserInfo = req.body;
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;  

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


router.post('/catapultAttack', (req, res, next) =>{

    let UserInfo = req.body;

    

    dbase.query('CALL CatapultAttack("' + UserInfo.info.user_username + '", ' + UserInfo.amount + ');', (err, results, fields) =>{

        if(err)throw err;

        res.send(results[0]); 

    });

});

router.post('/soldiersAttack', (req, res, next) =>{

    let UserInfo = req.body;

    

    dbase.query('CALL SoldiersAttack("' + UserInfo.info.user_username + '", ' + UserInfo.amount + ');', (err, results, fields) =>{

        if(err)throw err;

        res.send(results[0]); 

    });

});

router.post('/archersAttack', (req, res, next) =>{

    let UserInfo = req.body;

    

    dbase.query('CALL ArchersAttack("' + UserInfo.info.user_username + '", ' + UserInfo.amount + ');', (err, results, fields) =>{

        if(err)throw err;

        res.send(results[0]); 

    });

});

router.post('/addTroops', (req, res, next) =>{

    let UserInfo = req.body;

    

    dbase.query('CALL AddTroops("' + UserInfo.info.user_username + '", ' + UserInfo.castleSoldiers + ', ' + UserInfo.siegeCatapults + ', ' + UserInfo.siegeSoldiers + ',' + UserInfo.siegeArchers + ' );', (err, results, fields) =>{

        if(err)throw err;

        res.send(results[0]); 

    });

});




router.post('/getUserInfo', (req, res, next) => {

    let UserInfo = req.body;
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;


    if(UserInfo.name == undefined){
        for(let i = 0; i < UsersData.array().length; i++){
            if(ip == UsersData.array()[i].ip){
                UserInfo = UsersData.array()[i];
            }
        }
    }

    dbase.query('SELECT * FROM users_accounts WHERE user_username = "' + UserInfo.name + '";', (err, results, fields) =>{

        if(err)throw err;

        res.send(results);

    });

});

module.exports = router;
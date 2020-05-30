//UI elements\\
let SiegeCatapultAttackButton;
let SiegeSoldierAttackButton;
let SiegeArcherAttackButton;
let LogOffButton;
//------------\\

//Variables\\

let TimePassed = 0;

let AttackCoolDown = 0;

//Stored data of the siege info
let SiegeInfo = {

    siege_catapults: 0,
    siege_soldiers: 0,
    siege_archers: 0

};

//Stored data of the castle info
let CastleInfo = {

    castle_population: 0,
    castle_soldiers: 0,
    castle_strength: 0

};

//----------\\

let UserInfo;

function setup(){

    //Reset the timer
    TimePassed = 0;
    

    //Setting the canvas size
    createCanvas(650, 700);

    CheckIfUserOnline();

    //SetUp The UI elements\\
    SiegeCatapultAttackButton = new button(53.5, 600, 125, 75);
    SiegeSoldierAttackButton = new button(271.5, 600, 125, 75);
    SiegeArcherAttackButton = new button(471.5, 600, 125, 75);
    LogOffButton = new button(0, 0, 120, 50);
    //----------------------\\

    //Every 5 minutes add troops
    setInterval(function(){ 

        //Calculate the amount of troops that will be given to the castle and siege
        let CalculateAmountCastleSoldiers = int(random(5, 15));
        let CalculateAmountSiegeCatapults = int(random(1, 2));
        let CalculateAmountSiegeSoldiers = int(random(5, 10));
        let CalculateAmountSiegeArchers = int(random(1, 2));

        httpPost('/addTroops', {info: UserInfo, castleSoldiers: CalculateAmountCastleSoldiers, siegeCatapults : CalculateAmountSiegeCatapults, siegeSoldiers : CalculateAmountSiegeSoldiers, siegeArchers: CalculateAmountSiegeArchers}, data =>{
            SetTheUserData();
        });

    }, 
        300 * 1000);

};

function draw(){

    //Count time
    TimePassed += deltaTime/1000;

    //Decrease the cooldown
    if(AttackCoolDown > 0){
        AttackCoolDown -= deltaTime/1000;
    }else if(AttackCoolDown < 0){
        AttackCoolDown = 0;
    }

    //Reset the canvas and set the background color
    background(180);

    
    //Draw the header with the info about the current online player
    DrawProjectHeader();

    //Draw the castle
    DrawTheCastle();

    //Draw the siege
    DrawTheSiege();

    //Draw victory Screen
    DrawVictoryScreen();

    //Draw the log out button
    DrawLogOutButton();

};

function mousePressed(){

    //Log u off from the project
    LogOffButton.click(()=>{
        httpPost('/logoff', UserInfo,(data) =>{
            window.location.replace('/login');
        });
    });

    //Only the log out butotn will work if the castle is dead
    if(CastleInfo.castle_strength <= 0){
        return;
    }

    //When u press the catapult attack button
    SiegeCatapultAttackButton.click(()=>{
       
        if(AttackCoolDown > 0){
            return;
        }

        let CalculateAmount = int(random(1, 5));

        if(SiegeInfo.siege_catapults > 0){

            httpPost('/catapultAttack', {info: UserInfo, amount: CalculateAmount}, data =>{

                SetTheUserData();
                AttackCoolDown = 5;


            });
            
        }else{
            alert('You do not have enough catapults');
        };

    });

    //When u press the soldier attack button
    SiegeSoldierAttackButton.click(()=>{
        
        if(AttackCoolDown > 0){
            return;
        }

        let CalculateAmount = int(random(1, 10));

        if(SiegeInfo.siege_soldiers > 4){

            httpPost('/soldiersAttack', {info: UserInfo, amount: CalculateAmount}, data =>{

                SetTheUserData();
                AttackCoolDown = 5;

            });
            
        }else{
            alert('You do not have enough soldiers');
        };

    });

    //When you press the archer attack button
    SiegeArcherAttackButton.click(()=>{
     
        if(AttackCoolDown > 0){
            return;
        }

        let CalculateAmount = int(random(10, 35));

        if(SiegeInfo.siege_archers > 4){

            httpPost('/archersAttack', {info: UserInfo, amount: CalculateAmount}, data =>{

                SetTheUserData();
                AttackCoolDown = 5;

            });
            
        }else{
            alert('You do not have enough archers');
        };

    });


};
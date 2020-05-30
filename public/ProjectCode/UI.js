const DrawLogOutButton = () =>{

    //LogOutButton
    fill(227, 0, 0);
    LogOffButton.hovered(()=>{
        fill(176, 0, 0);
    });

    LogOffButton.draw();

    textSize(20);
    textAlign(CENTER, CENTER);
    BetterText('Log Out', LogOffButton.x + LogOffButton.w/2, LogOffButton.y + LogOffButton.h/2);
    fill(255);

};



const DrawProjectHeader = () =>{

    //Draw cooldownbar
    fill(200);
    rect(120, 0, 530, 50);
    fill(31, 155, 204);
    rect(120, 0, (AttackCoolDown * 530)/5, 50);
    fill(255);

};

const DrawVictoryScreen = () =>{
    
    if(CastleInfo.castle_strength <= 0){
        background(179, 0, 15);

        textAlign(CENTER, CENTER);
        textSize(40);
        BetterText('You win!', 325.5, 350);
    }

};

const DrawTheSiege = () =>{


    //Draw the siege line
    strokeWeight(6);
    line(0, 500, 650, 500);
    strokeWeight(1);

    //Draw the siege texts
    textSize(20);
    textAlign(CENTER, CENTER);
    BetterText('Siege Catapults: ' + SiegeInfo.siege_catapults, 116, 550);
    BetterText('Siege Soldiers: ' + SiegeInfo.siege_soldiers, 325, 550);
    BetterText('Siege Archers: ' + SiegeInfo.siege_archers, 534, 550);

    //Draw the buttons

    //Siege attack catapult
    SiegeCatapultAttackButton.hovered(()=>{
        fill(200);
    });
    SiegeCatapultAttackButton.draw();
    fill(255);
    textSize(16);
    textAlign(CENTER, CENTER);
    BetterText('Catapult Attack', 116, 637.5);

    //Siege attack soldier
    SiegeSoldierAttackButton.hovered(()=>{
        fill(200);
    });
    SiegeSoldierAttackButton.draw();
    fill(255);
    textSize(16);
    textAlign(CENTER, CENTER);
    BetterText('Soldier Attack', 325, 637.5);

    //Siege attack archer
    SiegeArcherAttackButton.hovered(()=>{
        fill(200);
    });
    SiegeArcherAttackButton.draw();
    fill(255);
    textSize(16);
    textAlign(CENTER, CENTER);
    BetterText('Archer Attack', 534, 637.5);

    //Display siege name
    textAlign(CENTER, BOTTOM);
    BetterText('Siege', 325, 495);

}

const DrawTheCastle = () =>{


    //Draw the castle data
    textAlign(CENTER, CENTER)
    BetterText('Population: ' + CastleInfo.castle_population, 116, 100);
    BetterText('Soldiers: ' + CastleInfo.castle_soldiers, 325.5, 100);
    BetterText('Wall strength: ' + CastleInfo.castle_strength + '%', 534, 100);

    //Draw the castle itself
    strokeWeight(8);
    rect(200, 250, 250, 125);
    //Draw castle healthbar
    fill(242, 0, 20, 50);
    strokeWeight(1)
    rect(200, 250, 250, (CastleInfo.castle_strength * 125)/100);
    fill(255);
    //Draw Castle text
    BetterText('Castle', 325, 312.5);
    strokeWeight(1);

};
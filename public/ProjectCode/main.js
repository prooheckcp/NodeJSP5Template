//UI elements\\
let TestButton;
let Test2Button;
let LogOffButton;
//------------\\

let UserInfo = { ip: '::ffff:127.0.0.1', name: 'xixi', password: '123' };

function setup(){

    createCanvas(700, 700);

    //Get the user
    if(typeof(UserInfo) != typeof({})){
        httpGet('/getUserInfo', data=>{
            
            if(data == 'error'){
                window.location.replace('/login');
            }else{
                UserInfo = data;
                print(UserInfo)
            }

        });
    };

    //SetUp The UI elements\\
    TestButton = new button(10, 20, 50, 50);
    Test2Button = new circleButton(100, 100, 90);
    LogOffButton = new button(0, 0, 120, 50);
};

function draw(){

    

    background(180);

    textSize(30);
    BetterText('uwu', 200, 50);

    TestButton.hovered(()=>{
        fill(200);
    });
    TestButton.draw();
    fill(255);

    Test2Button.hovered(()=>{
        fill(200);
    });
    Test2Button.draw();
    fill(255);

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

function mousePressed(){

    TestButton.click(()=>{print('uwu')});
    Test2Button.click(()=>{print('owo')});
    LogOffButton.click(()=>{
        httpPost('/logoff', UserInfo,(data) =>{
            window.location.replace('/login');
        });
    });

};
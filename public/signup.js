//Buttons
let SignupButton;
let LoginPage;
let SignupPage;

//Input text forms
let UserNameINP;
let PasswordINP;


let CurrentPassword = '';
let CurrentUsername = '';

function setup(){
    createCanvas(windowWidth, windowHeight);

    //User name inp
    UserNameINP = createInput('');
    UserNameINP.input(myInputEvent);

    //Password inp
    PasswordINP = createInput('', 'password');
    PasswordINP.input(myInputEvent2);

    //SignupButton
    SignupButton = new button(0, 0, 150, 50);
    LoginPage = new button(0, 0, 100, 50);
    SignupPage = new button(0, 0, 100, 50);
};

function draw(){
    background(200);

    //PageBanner
    fill(171, 0, 46);
    rect(0, 0, windowWidth, 75);
    textSize(40);
    textAlign(LEFT, CENTER)
    BetterText('Web Programming test', 0, 37.5);

    fill(99, 105, 255);
    LoginPage.x = 0;
    LoginPage.y = 75;
    LoginPage.hovered(()=>{
        fill(71, 76, 179);
    });
    LoginPage.draw();
    textSize(20);
    textAlign(CENTER, CENTER);
    BetterText('Login', LoginPage.x + LoginPage.w/2, LoginPage.y + LoginPage.h/2);

    fill(99, 105, 255);
    SignupPage.x = 100;
    SignupPage.y = 75;
    SignupPage.hovered(()=>{
        fill(71, 76, 179);
    });
    SignupPage.draw();
    textSize(20);
    textAlign(CENTER, CENTER);
    BetterText('Signup', SignupPage.x + SignupPage.w/2, SignupPage.y + SignupPage.h/2);

    //Form rectangle
    fill(0, 50);
    rect(windowWidth/2 - 150, windowHeight/2 - 250, 300, 500);

    PasswordINP

    //Username input
    textSize(20);
    textAlign(LEFT, BOTTOM);
    BetterText('Username:', windowWidth/2 - 75, windowHeight/2 - 150);
    UserNameINP.position(windowWidth/2 - 75, windowHeight/2 - 150);
    UserNameINP.size(150, 30);
    UserNameINP.style('font-size', '30px');

    //Password input
    textSize(20);
    textAlign(LEFT, BOTTOM);
    BetterText('Password:', windowWidth/2 - 75, windowHeight/2);
    PasswordINP.position(windowWidth/2 - 75, windowHeight/2);
    PasswordINP.size(150, 30);
    PasswordINP.style('font-size', '30px');

    //Signup Button
    fill(31, 153, 0);
    SignupButton.x = windowWidth/2 - 75;
    SignupButton.y = windowHeight/2 + 180;
    SignupButton.hovered(()=>{fill(20, 99, 0)});
    SignupButton.draw();
    textSize(30);
    textAlign(CENTER, CENTER);
    BetterText('Signup', SignupButton.x + SignupButton.w/2, SignupButton.y + SignupButton.h/2);
};

function mousePressed(){
    SignupButton.click(()=>{
       httpPost('/createAccount', {name: CurrentUsername, password: CurrentPassword}, data =>{

        if(data == 'Account created!'){
            window.location.replace('/game');
        }else{
            alert('Username already existed!')
        };

       });
    });

    SignupPage.click(()=>{
        window.location.replace('/signup');
    });

    LoginPage.click(()=>{
        window.location.replace('/login');
    });

};

function myInputEvent() {
    CurrentUsername =  this.value();
}

function myInputEvent2() {
    CurrentPassword =  this.value();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
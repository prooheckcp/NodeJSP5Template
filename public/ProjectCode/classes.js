const CheckSquare = (button, mx, my) =>{
    if(mx > button.x && mx < button.x + button.w && my > button.y && my < button.y + button.h){
        return true;
    }else{
        return false;
    };
};

const CheckCircle = (button, mx, my) =>{
    if(int(dist(button.x, button.y, mx, my)) < button.d/2){
        return true;
    }else{
        return false;
    };
};

class button{

    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    };

    draw(){
        rect(this.x, this.y, this.w, this.h);
    };

    hovered(func){

        if(CheckSquare(this, mouseX, mouseY)){
            if(typeof(func) == typeof(()=>{})){
                func();
            };
        };

    };

    click(func){

        if(CheckSquare(this, mouseX, mouseY)){

            if(typeof(func) == typeof(()=>{})){
                func();
            }else{
                print('Clicked on the button!');
            };
            
        };

    };

};

class circleButton{

    constructor(x, y, d){
        this.x = x;
        this.y = y;
        this.d = d;
    };

    draw(){
        circle(this.x, this.y, this.d);
    };
    
    hovered(func){

        if(CheckCircle(this, mouseX, mouseY)){
            if(typeof(func) == typeof(()=>{})){
                func();
            };
        };

    };

    click(func){

        if(CheckCircle(this, mouseX, mouseY)){
            if(typeof(func) == typeof(()=>{})){
                func();
            };
        };

    };

};

const BetterText = (string, x, y, color) => {

    fill(0);
    text(string, x + 2, y);
    text(string, x + 2, y + 2);
    text(string, x + 2, y - 2);
    text(string, x - 2, y);
    text(string, x - 2, y + 2);
    text(string, x - 2, y - 2);
    text(string, x, y + 2);
    text(string, x, y - 2);

    if(typeof(color) == typeof({})){
        fill(color.r, color.g, color.b)
    }else{
       fill(255); 
    };
    
    text(string, x, y);

    fill(255);
};
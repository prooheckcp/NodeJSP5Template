const SetTheUserData = () =>{
    httpPost('/getUserInfo', UserInfo, data =>{

        UserInfo = eval(data)[0];
        //Set the user variables
        SiegeInfo.siege_catapults = UserInfo.siege_catapults;
        SiegeInfo.siege_soldiers = UserInfo.siege_soldiers;
        SiegeInfo.siege_archers = UserInfo.siege_archers;

        CastleInfo.castle_population = UserInfo.castle_population;
        CastleInfo.castle_soldiers = UserInfo.castle_soldiers;
        CastleInfo.castle_strength = UserInfo.castle_strength;



    });
};


const CheckIfUserOnline = () =>{
    //Get the user
    if(typeof(UserInfo) != typeof({})){
        httpGet('/getUserInfo', data=>{
            
            if(data == 'error'){
                window.location.replace('/login');
            }else{

                UserInfo = data;    
                SetTheUserData();
            }

        });
    }else{

        SetTheUserData();

    };
};
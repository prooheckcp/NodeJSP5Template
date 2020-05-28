const CurrentOnlineUsers = [];

const AddUser = (ip, name, password) =>{

    CurrentOnlineUsers.push({
        ip: ip,
        name: name,
        password: password
    });
    console.log(CurrentOnlineUsers);
}

const RemoveUser = (object) =>{

    for(let i = 0; i < CurrentOnlineUsers.length ;i++){

        CurrentOnlineUsers.splice(i, 1);

    }

}

const GetArray = () =>{
    return CurrentOnlineUsers;
};

module.exports = {

    array: GetArray,
    add: AddUser,
    remove: RemoveUser

};
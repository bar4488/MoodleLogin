var loginClick;
var frame;


function login() {
    frame = document.getElementById("content").contentWindow.document;
    getLoginParameters(setLoginInput);
}

function getLoginParameters(callback) {
    chrome.storage.sync.get(["loginParams"], function(p){
        let params = p[0]
        if(params == null) {
            // change button click to saveDetails
            loginClick = frame.getElementsByClassName("subBottun")[0].onclick;
            frame.getElementsByClassName("subBottun")[0].onclick = saveDetails;
        }
        else {
            callback(params.username, params.id, params.password);
        }
    });
}

function setLoginParameters(params, callback) {
    chrome.storage.sync.set({"loginParams": params}, function(){
        //saved!
        callback();
    });
}

function setLoginInput(username, id, password)
{
    frame.getElementsByName("Ecom_User_ID")[0].value = username;
    frame.getElementsByName("Ecom_User_Pid")[0].value = id;
    frame.getElementsByName("Ecom_Password")[0].value = password;
    frame.getElementsByClassName("subBottun")[0].onclick();
}

function saveDetails()
{
    if(confirm("Do you want to save these details?"))
    {
        let username = document.getElementsByName("Ecom_User_ID")[0].value;
        let id = document.getElementsByName("Ecom_User_Pid")[0].value;
        let password = document.getElementsByName("Ecom_Password")[0].value;
        let dict = {
            "username": username,
            "id": id,
            "password": password
        };
        setLoginParameters(dict, loginClick);
    }
    else {
        loginClick();
    }
}

window.onload = login;
var loginClick;
var frame;


function login() {
    frame = document.getElementById("content").contentWindow.document.getElementById("credentials").contentWindow.document;
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
    if (username != null)
        frame.getElementsByName("Ecom_User_ID")[0].value = username;
    if (id != null)
        frame.getElementsByName("Ecom_User_Pid")[0].value = id;
    if (password != null)
        frame.getElementsByName("Ecom_Password")[0].value = password;
    setTimeout(()=>frame.getElementsByClassName("subBottun")[0].click(), 500);
}

function saveDetails()
{
    if(confirm("Do you want to save these details?"))
    {
        console.log('Entered saveDetails');
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
var loginClick;

function login() {
    getLoginParameters(setLoginInput);
}

function getLoginParameters(callback) {
    chrome.storage.sync.get("loginParams", function(params){
        if(params == null) {
            alert("We dont have your information. Type it now and save it for the next time!");
            // change button click to saveDetails
            loginClick = document.getElementsByClassName("subBottun")[0].onclick;
            document.getElementsByClassName("subBottun")[0].onclick = saveDetails;
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

window.onload = login;
function setLoginInputs(username, id, password)
{
    document.getElementsByName("Ecom_User_ID")[0].value = username;
    document.getElementsByName("Ecom_User_Pid")[0].value = id;
    document.getElementsByName("Ecom_Password")[0].value = password;
    document.getElementsByName("IDPLogin")[0].sumbit();
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
}

window.onload = login;
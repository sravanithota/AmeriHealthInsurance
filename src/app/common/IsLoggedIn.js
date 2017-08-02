import {browserHistory} from "react-router";

export const IsLoggedIn = () => {

    console.log("Is User LoggedIn check started....");

    var cookieName = "x-auth-ps360-token";
    var value = "; " + document.cookie;
    var cookieParts = value.split("; " + cookieName + "=");
    if (cookieParts.length == 2) {
        var cookieToken = cookieParts.pop().split(";").shift();
        console.log("User Logged In with following cookie : ", cookieToken);
        return true;
    }
    else {
        console.log("User Not Logged In : Required Cookie not found : ", cookieParts);
        //browserHistory.push("/signin");
        return true;
    }
};
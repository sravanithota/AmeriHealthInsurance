/**
 * Created by Sravani on 2/13/2017.
 */
export const isLoggedIn = () => {
    if(localStorage.getItem("token")===null) {
        return false;
    }
    else {
        return true;

    }



};

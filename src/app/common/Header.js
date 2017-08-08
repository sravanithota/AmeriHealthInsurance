import React from "react";
import {Link} from 'react-router';

const logo = require('../images/amerihealth-logo.jpg');

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            beforeSignInLink: "show",
            afterSignInLink: "hide",
        }
    }
    componentWillMount() {

        if (IsLoggedIn()) {//logged in
            this.setState({
                beforeSignInLink: "hide",
                afterSignInLink: "show"
            });
        }
        else //not logged in
        {
            this.setState({
                beforeSignInLink: "show",
                afterSignInLink: "hide"
            });
        }
    }
    OnLogout(e) {
        // e.preventDefault();
        console.log("Header : OnLogout: /logoutuser service started.....");
        Request.get('http://localhost:8080/signout')
            .end((err, res) => {
                if (!err && res) {
                    if (res.body.error) {//error
                        console.log("Header : OnLogout: /logoutuser service : Error in logout ", res);
                    }
                    else {//success
                        console.log("Header : OnLogout: /logoutuser service : Logout Success : ", res);
                        location.reload();
                        browserHistory.push("/signin");
                    }
                }
                else {
                    console.log("Header : OnLogout: /logoutuser service : Server ", err);
                }
            });
    }
    render() {
        return (
            <div>

                <nav className="navbar navbar-default">
                    <div>
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                    data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand">TabnerHealth</a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li className={this.state.beforeSignInLink}><Link to={""}>Home</Link></li>
                                <li className={this.state.beforeSignInLink}><Link to={"/"}>Providers</Link></li>
                                <li className={this.state.beforeSignInLink}><Link to={"/"}>About Us</Link></li>
                                <li className={this.state.afterSignInLink}><Link to={"/signin"}  onClick={this.OnLogout.bind(this)}>SignOut</Link></li>

                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <form className="form-inline search-bar">
                                    <input className="form-control" type="text" placeholder="Search"/>
                                    <button className="btn btn-outline-success" type="submit">Go</button>
                                </form>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }

}
import React from "react";
import {Link} from 'react-router';
import axios from 'axios';
import { isLoggedIn } from '../constants/isLoggedIn';
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

        if (isLoggedIn()) {//logged in
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

    signout(e) {
        var token = localStorage.getItem("token");
        console.log("tokennnnnnnnnnn" + token);
        var config = {
            headers: {'Content-Type': 'application/json', 'token': token}
        };

        axios.post("http://localhost:8080/signout", config)
            .then((res) => {
                console.log(res);
                this.signoutCallBack(res.data);
            })
            .catch((err) => {
                    console.log("server error");
                }
            )

    }

    signoutCallBack(result) {
        if (result.error) {
            localStorage.removeItem("token");
            localStorage.removeItem("partnerName");
            console.log("error in result body");
        } else {

            localStorage.removeItem("token");
            localStorage.removeItem("partnerName");
            location.reload();
            browserHistory.push('/');
            console.log("successfully signedout");

        }

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

                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li className={this.state.afterSignInLink}><Link to={"/login"}
                                                                                 onClick={this.signout.bind(this)}>SignOut</Link>
                                </li>
                                <li className={this.state.beforeSignInLink}>
                                    <form className="form-inline search-bar">
                                        <input className="form-control" type="text" placeholder="Search"/>
                                        <button className="btn btn-outline-success" type="submit">Go</button>
                                    </form>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }

}
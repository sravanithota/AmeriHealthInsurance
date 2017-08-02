import React from "react";
import {Link} from 'react-router';
var logo = require('../images/amerihealth-logo.jpg');

export default class Header extends React.Component {

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row justify-content-between">
                        <div className="col-xs-4 ">
                            <img src={logo}/>
                        </div>
                        <div className="col-xs-4 loginLink d-flex flex-column">
                            Already a member?
                            <Link to="/login">Login</Link>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                    <button className="navbar-toggler navbar-toggler-right" type="button">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="http://example.com"
                                   id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                   aria-expanded="false">
                                    Dropdown link
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <form className="form-inline mt-6  mt-md-0">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Go</button>
                            </form>
                        </ul>
                    </div>


                </nav>

            </div>
        );
    }

}
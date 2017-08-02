/**
 * Created by Sravani on 7/31/2017.
 */
/**
 * Created by Sravani on 3/24/2017.
 */
/**
 * Created by Sravani on 2/12/2017.
 */

import React from "react";
import axios from "axios";
import {browserHistory} from "react-router";

import {isLoggedIn} from "../constants/isLoggedIn";


export class SignupPage extends React.Component {


    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            emailId: "",
            password: "",
            rePassword: "",

        };
    }

/*
    componentWillMount() {
        if (isLoggedIn()) {

            browserHistory.push("/home");
        } else {
            browserHistory.push("/");
        }

    }*/

    onClickSubmit(e) {
        e.preventDefault();
        var signUpData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailId: this.state.emailId,
            password: this.state.password,
        };
        console.log("email id", signUpData.emailId);
        console.log("password", signUpData.password);

        axios.post('/signup', signUpData)
            .then((res) => {
                console.log("Login response", res);
                this.onClickSubmitCallBack(res.data);
            })
            .catch((err) => {
                console.log("server error ", err);
            });

    }

    onChangePassword(e) {

        if (this.state.password == this.state.rePassword) {
            this.setState({rePassword: e.target.value});

        } else {
            console.log(
                "passwords should match"
            )
        }
    }


    onClickSubmitCallBack(result) {

        if (result.error) {
            console.log("user name and password doesn't exist");
        } else {
            console.log("token and pname", result.datares.token, result.datares.pname);
            location.reload();
            browserHistory.push("/home");
            localStorage.setItem("token", result.datares.token);
            localStorage.setItem("partnerName", result.datares.partnerName);


        }

    }

    render() {

        return (
            <div>
                <br/><br/>
                <div className="col-xs-10 form-group loginform ">
                    <br/> <br/>  <h3><b>Login to Your Account</b></h3><br/>
                    <form onSubmit={this.onClickSubmit.bind(this)}>
                        <input className="form-control" type="text" id="firstname" placeholder="First Name"
                               value={this.state.firstName} onChange={(e) => {
                            this.setState({firstName: e.target.value})
                        }}/><br/>
                        <input className="form-control" type="text" id="lastname" placeholder="Last Name"
                               value={this.state.lastName} onChange={(e) => {
                            this.setState({lastName: e.target.value})
                        }}/><br/>
                        <input className="form-control" type="text" id="email" placeholder="Email ID"
                               value={this.state.emailId} onChange={(e) => {
                            this.setState({emailId: e.target.value})
                        }}/><br/>
                        <input className="form-control" type="password" id="pass" placeholder="Password"
                               value={this.state.password} onChange={(e) => {
                            this.setState({password: e.target.value})
                        }}/><br/>
                        <input className="form-control" type="repassword" id="repass" placeholder="Re-Password"
                               value={this.state.rePassword} onChange={(e) => {
                            this.setState({rePassword: e.target.value})
                        }}/>
                        <br/><br/>
                        <button type="submit" className="btn btn-primary btn-block" name="signup" value="SignUp"> SignUp
                        </button>
                    </form>
                    <br/>
                    {/*<div className="login-help">*/}
                    {/*<a href="#">Register</a> - <a href="#">Forgot Password</a>*/}
                    {/*</div>*/}
                </div>
            </div>
        );

    }


}

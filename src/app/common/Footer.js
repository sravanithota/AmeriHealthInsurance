import React, {Component} from "react";
import {Link} from "react-router";

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="jumbotron bg-inverse text-white  jumbotron-fluid footer1">
                        <div className="container-fluid">
                            <div className="row ">
                                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 align-items-center">
                                    <ul>
                                        <li className="footer-heading"><strong>Quick Links</strong></li>
                                        <li><Link to="/">About Us</Link></li>
                                        <li><Link to="/">FAQ</Link></li>
                                        <li><Link to="/">Feedback</Link></li>
                                    </ul>

                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                    <ul>
                                        <li className="footer-heading"><strong>AmeriHealth</strong></li>
                                        <li><Link to="/">For Doctors</Link></li>
                                        <li><Link to="/">For Patients</Link></li>
                                        <li><Link to="/">For Hospitals</Link></li>
                                        <li><Link to="/">For Labs</Link></li>
                                        <li><Link to="/">For Pharmacies</Link></li>
                                    </ul>

                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">

                                    <ul className="social-icons">
                                        <li className="footer-heading"><strong>Get Social</strong></li>
                                        <li><Link to="/"><i className="fa fa-facebook"></i> </Link></li>
                                        <li><Link to="/"><i className="fa fa-google-plus"></i> </Link></li>
                                        <li><Link to="/"><i className="fa fa-twitter"></i> </Link></li>
                                        <li><Link to="/"><i className="fa fa-pinterest"></i> </Link></li>

                                    </ul>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                    <ul>
                                        <li className="footer-heading"><strong>Contact Details</strong></li>
                                        <li>Contact Us</li>
                                        <li>E-mail : admin@amerihealth.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="copyright"> &copy;2017, AmeriHealth All Rights reserved. Privacy Policy | Terms & Conditions</p>
                </footer>
            </div>
        );
    }
}
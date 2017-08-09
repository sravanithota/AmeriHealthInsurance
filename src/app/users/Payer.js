import React from "react";
import {Link} from 'react-router';
import {browserHistory} from "react-router";
import Select from 'react-select';

import Header from '../common/Header';
import Footer from '../common/Footer';
import {isLoggedIn} from '../constants/isLoggedIn';
import {COUNTRIES} from '../constants/Countries';

export class Payer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

        if (isLoggedIn() === false) {
            browserHistory.push('/login');
        } else {
            browserHistory.push('/payer');

        }
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-4 sidebar-wrapper">
                            <ul className="sidebar-nav">
                                <li>
                                    <Link to="#">Prospective List</Link>
                                </li>
                                <li>
                                    <div data-toggle="collapse" data-target="#demo"><Link to="/payer/povidersearch">Provider
                                        Directory</Link></div>
                                    <div id="demo" className="collapse">
                                        <h1>demo</h1>

                                        {/*<Select id="idTestSelect"
                                                                                className="form-ontrol"
                                                                                ref="stateSelect"
                                                                                options={COUNTRIES}
                                                                                simpleValue
                                                                                name="testSelect"
                                                                                />*/}
                                    </div>
                                </li>
                                <li>
                                    <Link to="#">Documents</Link>
                                </li>
                                <li>
                                    <Link to="#">My Contracts</Link>
                                </li>
                                <li>
                                    <Link to="#">My Campaigns</Link>
                                </li>

                            </ul>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-10 col-xs-8">
                            {this.props.children}
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
}

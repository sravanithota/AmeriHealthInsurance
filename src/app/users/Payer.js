import React from "react";
import {Link} from 'react-router';
import {browserHistory} from "react-router";

import Header from '../common/Header';
import Footer from '../common/Footer';
import {isLoggedIn} from '../constants/isLoggedIn';

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
                        <div className="col-lg-3">

                        </div>
                        <div className="col-lg-9">
                            {this.props.children}
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
}

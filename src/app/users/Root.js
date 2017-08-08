import React from "react";
import {Link} from 'react-router';
import {browserHistory} from "react-router";

import Header from '../common/Header';
import Footer from '../common/Footer';
import {isLoggedIn} from '../constants/isLoggedIn';

export class Root extends React.Component {

    componentWillMount() {

        if (isLoggedIn()===false) {
            browserHistory.push('/');
        }else {
            browserHistory.push('/payer');

        }
    }
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}

                <Footer/>
            </div>
        );
    }
}

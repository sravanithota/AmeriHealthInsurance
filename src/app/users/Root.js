import React from "react";
import {Link} from 'react-router';

import Header from '../common/Header';
import Footer from '../common/Footer';

export class Root extends React.Component {
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

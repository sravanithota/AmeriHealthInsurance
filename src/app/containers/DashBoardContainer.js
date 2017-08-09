import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {isLoggedIn} from '../constants/isLoggedIn';
import {browserHistory} from "react-router";


export class DashBoardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div className="container-fluid">
                <h1>Dashboard</h1>
                <div className="row">


                </div>
            </div>
        );
    }
}

/*
const mapStateToProps = (state) => {
    return {starwarsFilms: state.starwarsFilms.films}
};
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchStarwarFilms}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(StarwarsFilmsContainer);
*/

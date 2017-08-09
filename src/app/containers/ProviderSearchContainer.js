import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {isLoggedIn} from '../constants/isLoggedIn';
import {browserHistory} from "react-router";


export class ProviderSearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <form className="form-group">

                        <div className="col-lg-4 col-xs-4 ">
                            <input className="form-control" placeholder="Search Providers" type="text"/>
                        </div>
                        <div className="col-lg-4 col-xs-4">
                            <input className="form-control" placeholder="City, state, postal code or country"
                                   type="text"/>
                        </div>
                        <div className="col-lg-4 col-xs-4">
                            <button type="submit" ref="search" className="btn btn-primary"> Search
                            </button>
                        </div>

                    </form>

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

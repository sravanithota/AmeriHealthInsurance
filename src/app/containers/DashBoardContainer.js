import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

export class DashBoardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
    }


    render() {
        return (
            <div className="container-fluid">
                <h1>Dashboard</h1>
                <div className="row">
                    <div className="col-xs-4 ">


                    </div>

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

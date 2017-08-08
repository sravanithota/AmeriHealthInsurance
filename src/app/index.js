import React from "react";
import {render} from "react-dom";
import ReactDOM from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import {Provider} from 'react-redux';


import {Home} from './components/home';
import {Root} from './users/Root';
import {SignupPage} from './components/Signup';
import {Login} from './components/Login';
import {DashBoardContainer} from './containers/DashBoardContainer';
import store from './store/store';

require("./stylesheets/scss/styles.scss");


export class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path={"/"} component={Root}>
                        <IndexRoute component={Home}/>
                        <Route path={"login"} component={Login}/>
                        <Route path={"signup"} component={SignupPage}/>
                        <Route path={"dashboard"} component={DashBoardContainer}/>
                    </Route>

                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
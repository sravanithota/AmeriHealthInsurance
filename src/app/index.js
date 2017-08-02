import React from "react";
import {render} from "react-dom";
import ReactDOM from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import { Home } from './components/home';
import { Root } from './users/Root';
import { SignupPage } from './components/Signup';
import { Login } from './components/Login';


require("./stylesheets/scss/styles.scss");



class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={Root}>
                    <IndexRoute component={Home}/>
                    <Route path={"login"} component={Login}/>
                    <Route path={"signup"} component={SignupPage}/>
                </Route>

            </Router>
        );
    }
}
ReactDOM.render(<App/>, document.getElementById('app'));
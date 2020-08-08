import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Login from './LoginComponent';
import Registro from './RegistroComponent';

class MainComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route exact path='/d' component={Registro} />
                    <Redirect to="/" />
                </Switch>
            </div>
        )
    }
}

export default MainComponent;


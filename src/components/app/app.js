import React, { Component } from 'react';
import { CurrencyPage, MainPage } from '../pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Buttons from '../buttons';
import { inject } from 'mobx-react';

class App extends Component  {
    
    componentDidMount() {
        this.props.store.fetchData();
    }

    render() {
        return (
            <div className='containter'>
                <Router>
                    <Buttons />
                    <Switch>
                        <Route exact path = '/' component={MainPage} />
                        <Route path='/currency' component={CurrencyPage} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default inject('store')(App);
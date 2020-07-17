import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {Router, Switch, Route} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import Jokes from './components/Jokes'
import Header from './components/Header';
import MusicMaster from './components/MusicMaster'

const history = createBrowserHistory();

ReactDOM.render(
    <Router history = {history}>
        <Switch>
            <Route exact path='/' render = {()=><Header><App/></Header>}/>
            <Route path='/jokes' render = {()=><Header><Jokes/></Header>}/>
            <Route path='/music' render = {()=><Header><MusicMaster/></Header>}/>
        </Switch>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

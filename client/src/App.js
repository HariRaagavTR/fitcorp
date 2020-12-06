import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import Login from './views/Login';
import Home from './views/Home';
import About from './views/About';
import Profile from './views/Profile';
import NotFound from './views/NotFound';
import './styles/styles.scss';

function App() {
    return (
        <Router>
            <main>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/profile" component={Profile} />
                    <Route component={NotFound} />
                </Switch>
            </main>
        </Router >
    );
}

export default App;

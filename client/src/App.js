import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import MenuA from './components/pages/MenuA';
import MenuB from './components/pages/MenuB';

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path='/menu-a' exact component={MenuA} />
                    <Route path='/menu-b' exact component={MenuB} />
                </Switch>
            </Router>
        </>
    );
}

export default App;

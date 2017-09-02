import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import Popular from './popular';
import Placeholder from './placeholder';

function App() {
    return (
        <Router>
            <div className={'container'}>
                <nav className="navigation">
                    <NavLink to="/popular" activeClassName="active">Popular</NavLink>
                    <NavLink to="/something" activeClassName="active">Something</NavLink>
                </nav>

                <Switch>
                    <Route exact path="/popular" component={Popular} />
                    <Route exact path="/something" />

                    <Route
                        render={() => <Placeholder placeholderText={'Not found'} />}
                    />
                </Switch>
            </div>
        </Router>
    );
}

export default App;

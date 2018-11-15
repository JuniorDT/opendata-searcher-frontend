import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

function AppRouter() {
    return <Switch>
        <Route path='/search' render={() => <div>Hello</div>}/>
        <Redirect to='/search'/>
    </Switch>
}

export {AppRouter}
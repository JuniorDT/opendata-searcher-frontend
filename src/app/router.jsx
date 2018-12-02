import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {Main} from "design/ecosystems/Main/index";

function AppRouter() {
    return <Switch>
        <Route path='/search' component={Main}/>
        <Redirect to='/search'/>
    </Switch>
}

export {AppRouter}
import React from 'react'
import {configureStore} from 'app/store'
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux'
import {AppRouter} from "app/router";

function App() {
    return <Provider store={configureStore()}>
        <Router>
            <AppRouter/>
        </Router>
    </Provider>
};

export {App}
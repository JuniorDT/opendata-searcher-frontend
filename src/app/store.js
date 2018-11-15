import thunk from 'redux-thunk';
import {applyMiddleware, compose, createStore} from 'redux';
import {reducer} from 'app/reducer.js'

function configureStore() {
    const middlewares = [thunk.withExtraArgument()];
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const enhancer = composeEnhancers(applyMiddleware(...middlewares));

    return createStore(reducer, enhancer);
}

export {configureStore}
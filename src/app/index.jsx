import React from 'react'
import {configureStore} from 'app/store.js'
import {Provider} from 'react-redux'

const App = <Provider store={configureStore()}>Hello</Provider>;

export {App}
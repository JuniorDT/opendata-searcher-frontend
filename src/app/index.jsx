import React from 'react'
import createStore from '/app/store'
import {Provider} from 'react-redux'

const App = <Provider store={createStore()}>Hello</Provider>;

export default App
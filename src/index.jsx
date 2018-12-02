import React from 'react';
import {render} from 'react-dom';
import {App} from 'app'
import 'design/styles/common.less'

const root = document.getElementById('root');
if (root) {
    render(<App/>, root)
}
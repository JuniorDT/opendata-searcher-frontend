import React from 'react';
import {render} from 'react-dom';
import {App} from 'app'

const root = document.getElementById('root');
if (root) {
    render(<h1>Hello</h1>, root)
}
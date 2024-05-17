import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Counter';

const App = () => (
    <Counter count="10" />
)

ReactDOM.render(<App />,document.getElementById('root'));
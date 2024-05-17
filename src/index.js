import React from 'react';
import { createRoot } from 'react-dom/client';  // Use createRoot instead of ReactDOM.render
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './Counter';

const initialStates = { 
    count: 0,
    title: 'Codificadores',
    name: 'Matheus'
};

function reducer(state = initialStates, action) {
  return state;
}

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

const root = createRoot(document.getElementById('root'));  // Create a root
root.render(<App />);  // Render the App component within the root

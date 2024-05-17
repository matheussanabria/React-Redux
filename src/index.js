import React from 'react';
import { createRoot } from 'react-dom/client';  // Use createRoot instead of ReactDOM.render
import './index.css';
import axios from 'axios'; 
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './Counter';

const initialStates = { 
    count: 0,
    title: 'Codificadores',
    name: 'Matheus'
};

function reducer(state = initialStates, action) {

    if(action.type === 'INCREMENT'){
        return {
          count:state.count + 1,
          title:state.title,
          name:state.name
        }
    } else if(action.type === 'ALTERAR_TITULO'){
      axios.get('https://my-json-server.typicode.com/typicode/demo/posts').then((response)=>{
        console.log(response);
        store.dispatch({type:'ALTERAR_TITULO_FINAL',title:response.data[0].title});
      })
    } else if(action.type = 'ALTERAR_TITULO_FINAL'){
      return {count: state.count, title: action.title}
    }

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

import React from 'react';
import { createStore } from 'redux';
import axios from 'axios';
import './App.css';

const reducer = (state,action) => {

  if(action.type === "INC"){
      return state + action.payload; 
  } else if(action.type === "DEC"){
      return state - action.payload;
  } else if(action.type === 'info'){
      console.log(action.title);
  }
  return state;
}

const store = createStore(reducer,0);

store.subscribe(() => {
  console.log('O estado mudou',store.getState());
})

store.dispatch({type:'INC',payload: 1});
store.dispatch({type:'DEC',payload: 1});
store.dispatch({type:'INC',payload: 1});
store.dispatch({type:'INC',payload: 1});
store.dispatch({type:'INC',payload: 1});

axios.get('https://my-json-server.typicode.com/typicode/demo/posts').then((response) => {
  console.log(response)
});



class App extends React.Component{

    constructor(props){
      super(props);
      this.state = {count:0};
      this.increment = this.increment.bind(this);
    }

    increment = () => {
      console.log("Incrementado!");

      this.setState({
        count: this.state.count + 1
      })
    }
  
    decrement = () => {
      console.log("Decrementado!");

      this.setState({
        count: this.state.count - 1
      })
    }
  

    render(){
      return(
        <main className='App'>
          <h2 className='text-center'>Hello World {this.state.count}</h2>
          <button onClick={this.increment}>Incrementar!</button>
          <button onClick={this.decrement}>Decrementar!</button>

        </main>
      );
    }

}

export default App;
import React from 'react';
import './App.css';

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
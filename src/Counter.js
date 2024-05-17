import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: 'INC', payload: 1 });
  };

  changeTitle = () => {
    this.props.dispatch({ type: 'info', title: 'Novo Título' });
  };

  render() {
    return (
      <main className='App'>
        <h2 className='text-center'>Hello World {this.props.count}</h2>
        <button onClick={this.increment}>Incrementar!</button>
        <button onClick={this.changeTitle}>Alterar Título!</button>
        <h2>{this.props.count}</h2>
        <h3>{this.props.title}</h3>
        <h3>{this.props.name}</h3>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count,
  title: state.title,
  name: state.name

});
export default connect(mapStateToProps)(Counter);
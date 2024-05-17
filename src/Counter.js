import React from 'react';
import { connect } from 'react-redux';
import './App.css';

class Counter extends React.Component {

  increment = () => {
    //TODO: Chamar função para incrementar no próprio redux.
      this.props.dispatch({
        'type':'INCREMENT',
        //'title': 'Codificadores de Negócios',
        //'name':'João'
      });
  };

  changeTitle = () => {
    this.props.dispatch({
      'type':'ALTERAR_TITULO',
      //'title': 'Codificadores de Negócios',
      //'name':'João'
    });
};

  render() {
    return (
      <main className='App'>
        <h2 className='text-center'>Hello World</h2>
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
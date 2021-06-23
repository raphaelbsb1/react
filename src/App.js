import React from 'react';
import './App.css';
import Cep from './Cep/Cep';
import FormConta from './FormConta/FormConta';
import Contas from './Contas/Contas';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { contas: [] }
  }

  salvarNota(conta) {
    const contas = [...this.state.contas, conta];
    this.setState({
      contas: contas
    });
  }

  removeConta(index) {
    console.log(index);
    this.setState({
      contas: this.state.contas.splice(index, 1)
    });

  }

  render() {
    return (
      <div>
        <Cep />
        <FormConta salvar={this.salvarNota.bind(this)} />
        <Contas contas={this.state.contas} removeConta={this.removeConta.bind(this)} />
      </div>
    );
  }

}




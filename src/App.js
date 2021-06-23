import React from 'react';
import './App.css';
import Cep from './Cep/Cep';
import FormConta from './FormConta/FormConta';
import Contas from './Contas/Contas';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contas: [],
      conta: {
        index: null,
        nome: "",
        descricao: ""
      }
    }
  }

  salvarNota(conta) {
    const contas = [...this.state.contas, conta];
    this.setState({
      ...this.state,
      contas: contas
    });
  }

  removeConta(index) {
    let contas = this.state.contas;
    contas.splice(index, 1);
    this.setState({
      ...this.state,
      contas: contas
    });

  }

  editarConta(index) {
    const conta = this.state.contas[index];
    console.log(conta);
    this.setState({
      ...this.state,
      conta: conta
    });
  }


  render() {
    return (
      <div>
        <Cep />
        <FormConta salvar={this.salvarNota.bind(this)} conta={this.state.conta} />
        <Contas contas={this.state.contas} removeConta={this.removeConta.bind(this)} editarConta={this.editarConta.bind(this)} />
      </div>
    );
  }

}




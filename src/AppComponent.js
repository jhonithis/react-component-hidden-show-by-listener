import React, {Component} from 'react';
import './App.css';

class AppComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      showCodeEstabelecimento: false 
    };
  }

  verifyUserDesbravador = (value) => {
    this.setState({showCodeEstabelecimento : value.includes('@desbravador.com.br') ? true : false})
  }

  render() {
   return (
    <div className="App">
      <header className="App-header">
        <input
          onChange={(e) => this.verifyUserDesbravador(e.target.value)}
          placeholder="Email" 
          type="text" />
          <br />
          {this.state.showCodeEstabelecimento && <InputCodeEstabelecimento /> }
      </header>
    </div>
    )
  }
}

const InputCodeEstabelecimento = () => (
  <input type="text" placeholder="informe Codigo Estabelecimento" />
)

export default AppComponent;
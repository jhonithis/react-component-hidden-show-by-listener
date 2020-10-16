import React from 'react';
import './App.css';

function App() {
  
  const [showCodeEstabelecimento, setShowInputCodeEstabelecimento] = React.useState(false)
  
  const verifyUserDesbravador = (value) => (
    setShowInputCodeEstabelecimento(value.includes('@desbravador.com.br') ? true : false)
  )

  return (
    <div className="App">
      <header className="App-header">
        <input
          onChange={(e) => verifyUserDesbravador(e.target.value)}
          placeholder="Email" 
          type="text" />
        <br />
        {showCodeEstabelecimento && <InputCodeEstabelecimento /> }
      </header>
    </div>
  );
}

const InputCodeEstabelecimento = () => (
  <input type="text" placeholder="informe Codigo Estabelecimento" />
)

export default App;

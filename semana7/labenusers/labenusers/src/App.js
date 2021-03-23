import React from 'react';
import './App.css';
import styled from 'styled-components';
import Registro from './components/Registro';

class App extends React.Component {

  state = {
    pagina: 1,
  }

  onClickProximaPagina = () =>{
    this.setState({
      pagina: this.state.pagina
    })
  }

  render() {

    const renderizaPagina = () => {
      switch (this.state.pagina) {
        case 1: 
          return <Registro />;
      }
    }  

    return (

      <div className = "App">
          {renderizaPagina()}
          {this.state.pagina !== 2 && <button onClick={this.onClickProximaPagina}>Salvar</button>}
      </div>
    );  
  }

  
}

export default App;

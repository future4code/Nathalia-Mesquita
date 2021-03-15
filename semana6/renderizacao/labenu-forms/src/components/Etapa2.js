import React from "react";
import './App.css';

class Etapa2 extends React.Component {

  paraProximaEtapa = () => {
    this.setState({ etapa: 3 });
  }

  render() {
    return (
      <div className="App">
        <div>
            <h3>ETAPA 2: Informações educacionais para quem está cursando (ou já terminou) o ensino superior</h3>
            <div>
              <p>Qual seu curso?</p>
              <input></input>
            </div>
            <div>
            <p>Qual a unidade de ensino?</p>
              <input></input>
            </div>
            <div>
              <button onClick={this.paraProximaEtapa}>Próxima Etapa</button>
              {this.renderizaEtapa()}
          </div>
        </div>
      </div>
    );
  }
}

export default Etapa2;
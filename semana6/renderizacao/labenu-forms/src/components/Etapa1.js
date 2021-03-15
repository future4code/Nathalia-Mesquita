import React from "react";
import './App.css';


class Etapa1 extends React.Component {

  paraProximaEtapa = () => {
    this.setState({ etapa: 2 });
  }

  render() {
    return (
    <div className="App">
      <div>
          <h3>ETAPA 1: Dados gerais</h3>
          <div>
            <p>Qual seu nome?</p>
            <input></input>
          </div>
          <div>
          <p>Qual sua idade?</p>
            <input></input>
          </div>
          <div>
          <p>Qual seu e-mail?</p>
            <input></input>
          </div>
          <div>
          <p>Qual sua escolaridade?</p>
            <select>
              <option value='ensino medio incompleto'>Ensino Médio Incompleto</option>
              <option value='ensino medio completo'>Ensino Médio Completo</option>
              <option value='ensino superior incompleto'>Ensino Superior Incompleto</option>
              <option value='ensino superior completo'>Ensino Superior Completo</option>
            </select>
          </div>
          <div>
            <button onClick={this.paraProximaEtapa}>Próxima Etapa</button>
            {this.renderizaEtapa()}
          </div>
      </div>  
    </div>
  );
}

export default Etapa1;
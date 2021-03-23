import React from "react";

class Etapa1 extends React.Component {

  state = {
    valorInputNome: "",
    valorInputIdade: "",
    valorInputEmail: "",
}

onChangeInputNome = (event) => {
  this.setState({ valorInputNome: event.target.value });
};

onChangeInputIdade = (event) => {
  this.setState({ valorInputIdade: event.target.value });
};

onChangeInputEmail = (event) => {
  this.setState({ valorInputEmail: event.target.value });
};

  render() {
    return (
    <div className="App">
      <div>
          <h3>ETAPA 1: Dados gerais</h3>
          <div>
            <p>Qual seu nome?</p>
            <input onChange ={this.onChangeInputNome} value={this.state.valorInputNome}/>
          </div>
          <div>
          <p>Qual sua idade?</p>
          <input onChange ={this.onChangeInputIdade} value={this.state.valorInputIdade}/>
          </div>
          <div>
          <p>Qual seu e-mail?</p>
          <input onChange ={this.onChangeInputEmail} value={this.state.valorInputEmail}/>
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
          
      </div>  
    </div>
  );
}
}
export default Etapa1;
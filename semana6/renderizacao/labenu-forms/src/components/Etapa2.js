import React from "react";

class Etapa2 extends React.Component {

  state = {
    valorInputCurso: "",
    valorInputUnidade: "",
  }

onChangeInputCurso = (event) => {
    this.setState({ valorInputCurso: event.target.value });
};

onChangeInputUnidade = (event) => {
    this.setState({ valorInputUnidade: event.target.value });
};

  render() {
    return (
      <div className="App">
        <div>
            <h3>ETAPA 2: Informações educacionais para quem está cursando (ou já terminou) o ensino superior</h3>
            <div>
              <p>Qual seu curso?</p>
              <input onChange ={this.onChangeInputCurso} value={this.state.valorInputCurso} />
            </div>
            <div>
            <p>Qual a unidade de ensino?</p>
            <input onChange ={this.onChangeInputUnidade} value={this.state.valorInputUnidade} />
            </div>

        </div>
      </div>
    );
  }
}

export default Etapa2;
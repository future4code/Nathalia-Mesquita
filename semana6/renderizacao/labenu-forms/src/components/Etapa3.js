import React from "react";


class Etapa3 extends React.Component {

  state = {
    valorInputFacul: "",
}

onChangeInputFacul = (event) => {
  this.setState({ valorInputFacul: event.target.value });
};

  render() {
    return (
      <div className="App">
        <div>
          <h3>ETAPA 3: Informações sobre quem não se formou no ensino superior nem está cursando</h3>
              <div>
                <p>Por que você não terminou um curso de graduação?</p>
                <input onChange ={this.onChangeInputFacul} value={this.state.valorInputFacul} />
              </div>
              <div>
              <p>Você fez algum curso complementar?</p>
              <select>
                  <option value='curso tecnico'>Curso técnico</option>
                  <option value='cursos de ingles'>Cursos de inglês</option>
                  <option value='nao fez curso complementar'>Não fiz curso complementar</option>
                </select>
              </div>
        </div>      
      </div>
    );
  }  
}

export default Etapa3;
import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Nathalia Cardoso" 
          descricao="Oi, eu sou a Nath. Eu sou aluna da Labenu e futura dev. Atualmente estou estudando React."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
        <CardPequeno 
          imagem="https://www.flaticon.com/svg/vstatic/svg/1782/1782765.svg?token=exp=1615320199~hmac=35e23eb53c57a130aa1ca023c315c545" 
          nome="Email: " 
          descricao="nathalia.mscardoso@gmail.com" 
        />
        
        <CardPequeno 
          imagem="https://www.flaticon.com/svg/vstatic/svg/484/484167.svg?token=exp=1615320102~hmac=96ec040a41a78f50beda5633293bf3a8" 
          nome="Endereço: " 
          descricao="São Paulo, SP - Brasil" 
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="http://www2.voltaredonda.rj.gov.br/sms/templates/saude/images/topo.png?version=2017" 
          nome="Secretaria Municipal de Saúde" 
          descricao="Analista de Sistemas. Implantação de Sistemas de Saúde e Liderança de Equipe." 
        />
        
        <CardGrande 
          imagem="https://www.epdvr.com.br/img/logo-epdvr-colorido-quadrado.png" 
          nome="Empresa de Processamento de Dados / VR" 
          descricao="Analista de Sistemas. HTML; CSS; Geoprocessamento." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="data:image/jpeg;base64,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" 
          texto="Linkedin" 
        />        
      </div>
    </div>
  );
}

export default App;

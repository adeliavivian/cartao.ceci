import React from 'react';
import '../componets/Cartao.css';

const Cartao = () => {
  return (
    <div className="cartao-container">
      <div className="cartao">
        <div className="cartao-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg"
            alt="Logo da Concessionária"
          />
        </div>
        <div className="cartao-info">
          <h1>BMW Agulhas Negras</h1>
          <p>Concessionária Premium | Excelência e Performance</p>
        </div>
        <div className="cartao-links">
          <a
            href="https://www.linkedin.com/company/agulhasnegrasbmw/"
            className="icon linkedin"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          />
          <a
            href="https://www.instagram.com/bmwagulhasnegras/"
            className="icon instagram"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          />
          <a
            href="https://www.bmwagulhasnegras.com.br"
            className="icon site"
            target="_blank"
            rel="noopener noreferrer"
            title="Site"
          />
        </div>
      </div>
    </div>
  );
};

export default Cartao;

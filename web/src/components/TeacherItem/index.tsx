import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/29052019?s=460&u=025826220524ecbad3ba135735c9333deafb0636&v=4" alt="Eduardo Kussler"/>
        <div>
          <strong>Edaurdo Kussler</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>
             Melhor matemático das galáxias /s
        <br/><br/>
             Adora errar sinas e fazer demonstrações que não fazem nenhum sentido
      </p>

      <footer>
        <p>
              Preço/hora 
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;